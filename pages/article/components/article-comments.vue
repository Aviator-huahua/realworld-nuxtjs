<!--
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 19:58:15
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 20:31:01
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
        ></textarea>
      </div>
      <div class="card-footer">
        <img
          src="https://api.realworld.io/images/demo-avatar.png"
          class="comment-author-img"
        />
        <button class="btn btn-sm btn-primary">
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
import { getComments } from "@/api/article.js";
export default {
  name: "ArticleComments",
  props: ["article"],
  data() {
    return {
      comments: [],
    };
  },
  async mounted() {
    const { data } = await getComments(this.article.slug);
    this.comments = data.comments;
  },
};
</script>

<style scoped>
</style>