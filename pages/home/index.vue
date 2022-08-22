<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <!-- 左侧内容 -->
        <div class="col-md-9">
          <!-- 左侧导航 -->
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li
                v-if="user"
                class="nav-item"
              >
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{active:tab==='your_feed'}"
                  :to="{
                    name:'home',
                    query:{
                      tab:'your_feed'
                    }
                  }"
                >Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link
                  exact
                  class="nav-link"
                  :class="{active:tab==='global_feed'}"
                  :to="{
                    name:'home',
                    query:{
                      tab:'global_feed'
                    }
                  }"
                >Global Feed</nuxt-link>
              </li>
              <li
                v-if="tag"
                class="nav-item"
              >
                <nuxt-link
                  class="nav-link"
                  :class="{active:tab==='tag'}"
                  :to="{
                    name:'home',
                    query:{
                      tab:'tag',
                      tag
                    }
                  }"
                >#{{tag}}</nuxt-link>
              </li>
            </ul>
          </div>

          <!-- 左侧文章列表 -->
          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link :to="{
                name:'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  :to="{
                    name:'profile',
                    params: {
                      username: article.author.username
                    }
                  }"
                  class="author"
                >
                  {{article.author.username}}
                </nuxt-link>
                <span class="date">{{article.createdAt|date('MMM DD,YYYY')}}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active:article.favorited
                }"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                name:'article',
                params:{
                  slug: article.slug
                }
              }"
            >
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 左侧分页 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                :class="{
                  active: item === page
                }"
                v-for="item in totalPage"
                :key="item"
              >
                <nuxt-link
                  class="page-link"
                  :to="{
                    name: 'home',
                    query: {
                      page: item,
                      tab,
                      tag,
                    }
                  }"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>

        </div>
        <!-- 右侧标签 -->
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <nuxt-link
                :to="{
                  name:'home',
                  query:{
                    tab:'tag',
                    tag,
                  }
                }"
                class="tag-pill tag-default"
                v-for="(tag, idx) in tags"
                :key="idx"
              >{{tag}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getCommonArticles,
  getArticles,
  addFavorites,
  deleteFavorites,
} from "@/api/article";
import { getTags } from "@/api/tags";
import { mapState } from "vuex";
export default {
  name: "HomeIndex",
  data() {
    return {};
  },
  // watchQuery:true,
  watchQuery: ["page", "tag", "tab"],

  async asyncData({ query, store }) {
    // 分页参数
    const limit = 2,
      page = Number.parseInt(query.page || 1),
      { tag, tab = "global_feed" } = query;
    // 获取文章列表
    const loadAritcles =
      store.state.user && tab === "your_feed" ? getArticles : getCommonArticles;

    const [articleRes, totalRes, tagRes] = await Promise.all([
      // 获取文章列表
      loadAritcles({
        tag,
        limit,
        offset: (page - 1) * limit,
      }),
      // 获取数据总条数
      loadAritcles({
        tag,
        limit: 999,
      }),
      // 获取tag
      getTags(),
    ]);
    const { articles } = articleRes.data || {};

    const { articlesCount } = totalRes.data || {};

    const { tags } = tagRes.data || {};

    articles.forEach(article=>article.favoriteDisabled=false)

    return {
      articles,
      articlesCount,
      limit,
      page,
      tags,
      tag,
      tab,
    };
  },

  methods: {
    async onFavorite(article) {
      article.favoriteDisabled=true;
      if (article.favorited) {
        // 取消点赞
        await deleteFavorites(article.slug);
        article.favorited = false;
        article.favoritesCount -= 1;
      } else {
        // 添加点赞
        await addFavorites(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled=false;
    },
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    },
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
</style>