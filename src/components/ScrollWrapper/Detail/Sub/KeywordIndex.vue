<template>
  <div class="comment-wrapper">
      <!-- 评论关键区组件 -->
      <detail-title icon="icon-comment" title="关键评论区"></detail-title>
      <detail-comment-keyword :keywordList="keywordList"></detail-comment-keyword>
  </div>
</template>

<script>
import DetailCommentKeyword from './CommentKeyword.vue';
import DetailTitle from './Title.vue';
export default {
name:'DetailKeywordIndex',
components:{
    DetailCommentKeyword,
    DetailTitle
},
props:{
    keywordList:Array
}
}
</script>

<style lang="scss" scoped>
.comment-wrapper{
    margin-top: .1rem;
}
</style>