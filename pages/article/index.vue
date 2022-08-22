<template>

  <div class="article-page">

    <div class="banner">
      <div class="container">
        <!-- 标题 -->
        <h1>{{article.title}}</h1>

        <!-- 作者信息 -->
        <div class="article-actions">
          <ArticleMeta :article="article" />
        </div>
      </div>
    </div>

    <div class="container page">
      <!-- 文章内容 -->
      <div class="row article-content">
        <div
          v-html="article.body"
          class="col-md-12"
        >
        </div>
      </div>
      <hr />
      <!-- 作者信息 -->
      <div class="article-actions">
        <ArticleMeta :article="article" />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <ArticleComments :article="article" />
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { getArticlesDetail } from "@/api/article";
import MarkdownIt from "markdown-it";
import ArticleMeta from "./components/article-meta.vue";
import ArticleComments from "./components/article-comments.vue";

export default {
  name: "ArticleIndex",
  components: {
    ArticleMeta,
    ArticleComments,
  },
  data() {
    return {};
  },
  async asyncData({ params }) {
    const { data } = await getArticlesDetail(params.slug);
    const { article } = data;
    const md = MarkdownIt();
    article.body = md.render(article.body);

    console.log(data);
    return {
      article: data.article,
    };
  },
};
</script>

<style scoped>
</style>