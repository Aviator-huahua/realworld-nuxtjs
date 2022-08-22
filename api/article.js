/*
 * @Author: Aviator_huahua
 * @Date: 2022-08-15 21:16:45
 * @LastEditors: Aviator_huahua
 * @LastEditTime: 2022-08-21 20:10:02
 * @Description: 
 */
import {
  request
} from '@/plugins/request'

/**
 * @description: 获取关注的文章列表
 * @param {*} params
 * @return {*}
 */
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

/**
 * @description: 获取公共的文章列表
 * @param {*} params
 * @return {*}
 */
export const getCommonArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

/**
 * @description: 创建文章
 * @param {*} data
 * @return {*}
 */
export const createArticles = data => {
  return request({
    method: 'POST',
    url: '/api/articles',
    data
  })
}

/**
 * @description: 获取文章详情
 * @param {*} data
 * @return {*}
 */
export const getArticlesDetail = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`,
  })
}

/**
 * @description: 编辑文章
 * @param {*} data
 * @return {*}
 */
export const updateArticles = slug => {
  return request({
    method: 'PUT',
    url: `/api/articles/${slug}`,
  })
}

/**
 * @description: 删除文章
 * @param {*} data
 * @return {*}
 */
export const deleteArticles = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`,
  })
}

/**
 * @description: 点赞
 * @param {*} data
 * @return {*}
 */
export const addFavorites = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

/**
 * @description: 删除点赞
 * @param {*} data
 * @return {*}
 */
export const deleteFavorites = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

/**
 * @description: 获取评论
 * @param {*} data
 * @return {*}
 */
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`,
  })
}

/**
 * @description: 发布评论
 * @param {*} data
 * @return {*}
 */
export const publishComment = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments`,
  })
}

/**
 * @description: 删除评论
 * @param {*} data
 * @return {*}
 */
export const deleteComment = data => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${data.slug}/comments/${data.id}`,
  })
}