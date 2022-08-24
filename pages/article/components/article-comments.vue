<!--
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 19:58:15
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-24 21:51:50
 * @Description: 
-->
<template>
  <div>
    <!-- 发布评论 -->
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="comment"
        ></textarea>
      </div>
      <div class="card-footer">
        <img
          :src="user.image||'https://s20.lgstatic.com/growth/activity/20210720/1626784734098.jpeg?x-oss-process=style/80'"
          class="comment-author-img"
        />
        <button
          class="btn btn-sm btn-primary"
          @click="publishComments"
        >
          Post Comment
        </button>
      </div>
    </form>

    <!-- 评论列表 -->
    <div
      class="card"
      v-for="comment in comments"
      :key="comment.id"
    >
      <div class="card-block">
        <p class="card-text">{{comment.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name:'profile',
            params:{
              username:comment.author.username
            }
          }"
          class="comment-author"
        >
          <img
            :src="comment.author.image"
            class="comment-author-img"
          />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name:'profile',
            params:{
              username:comment.author.username
            }
          }"
          class="comment-author"
        >{{comment.author.username}}</nuxt-link>
        <span class="date-posted">{{comment.createdAt|date('MMM DD,YYYY')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, publishComment } from "@/api/article.js";
import { mapState } from "vuex";
export default {
  name: "ArticleComments",
  props: ["article"],
  data() {
    return {
      comments: [],
      comment: "",
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async publishComments() {
      await publishComment({ slug: this.article.slug, comment: this.comment });
      this.initData();
    },
    async initData() {
      const { data } = await getComments(this.article.slug);
      this.comments = data.comments;
    },
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
</style>