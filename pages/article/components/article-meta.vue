<!--
 * @Author: Aviator_huahua
 * @Date: 2022-08-21 19:15:58
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 20:18:07
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
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow {{article.author.username}}
    </button>
    
    <!-- 点赞文章 -->
    <button
      class="btn btn-sm btn-outline-primary"
      :class="{active : article.favorited}"
    >
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{article.favoritesCount}})</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ArticleMeta",
  props: ["article"],
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
};
</script>

<style scoped>
</style>