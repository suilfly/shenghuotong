<template>
<!-- 评论关键字组件 -->
  <div class="keyword-wrapper">
      <span class="keyword" v-for="(item, index) of keywordList" :key="index">{{item}}</span>
  </div>
</template>

<script>
export default {
name:'DetailCommentKeyword',
components:{

},
props:{
    keywordList:Array
}
}
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';
.keyword-wrapper{
    line-height: .18rem;
    background-color: #fff;
    padding: .05rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    .keyword{
        color: $defaultGreen;
        border: 1px solid $defaultGreen;
        border-radius: .01rem;
        box-sizing: border-box;
        line-height: .25rem;
        padding: .01rem;
        margin-right: .05rem;
        margin-bottom: .05rem;
        font-size: .13rem;
    }
}
</style>