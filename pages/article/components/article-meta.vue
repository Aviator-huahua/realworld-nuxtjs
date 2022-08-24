<!--
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 19:15:58
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-24 21:08:52
 * @Description: 
-->
<template>
  <div class="article-meta">
    <!-- 头像 -->
    <nuxt-link :to="{
      name:'profile',
      params:{
        username:article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <!-- 用户名、时间 -->
    <div class="info">
      <nuxt-link
        :to="{
          name:'profile',
          params:{
            username:article.author.username
          }
        }"
        class="author"
      >{{article.author.username}}</nuxt-link>
      <span class="date">{{article.createdAt|date('MMM DD,YYYY')}}</span>
    </div>

    <!-- 关注作者 -->
    <button
      class="btn btn-sm btn-outline-secondary"
      :class="{active : article.author.following}"
      @click="followAuthor(article.author)"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      {{article.author.following?"Unfollow":"Follow"}} {{article.author.username}}
    </button>

    <!-- 点赞文章 -->
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{active : article.favorited}"
      @click="favoritePost(article)"
    >
      <i class="ion-heart"></i>
      &nbsp;
      {{article.favorited?"Unfavorite Post":"Favorite Post"}} <span class="counter">({{article.favoritesCount}})</span>
    </button>
  </div>
</template>

<script>
import {
  followUser,
  unfollowUser,
  favoritePost,
  unfavoritePost,
} from "@/api/article.js";
export default {
  name: "ArticleMeta",
  props: ["article"],
  // 设置网页tab标题
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
  methods: {
    async followAuthor(author) {
      const { following, username } = author;
      const api = following ? unfollowUser : followUser;
      await api(username);
      author.following = !following;
    },
    async favoritePost(article) {
      const { favorited, slug } = article;
      const api = favorited ? unfavoritePost : favoritePost;
      await api(slug);
      article.favorited = !favorited;
      article.favoritesCount += favorited ? -1 : 1;
    },
  },
};
</script>

<style scoped>
</style>