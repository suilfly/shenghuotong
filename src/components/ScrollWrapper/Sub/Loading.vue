<template>
  <div class="loading" v-show="loadingShow">
      <img src="~@/assets/images/loading.gif" alt="加载中..." class="loading-img">
  </div>
</template>

<script>
export default {
name:'Loading',
props:{
    loadingShow:{
        type:Boolean,
        default(){
            return true;
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.loading{
    @include vh-center;
    height: 6rem;
    background-color: #fff;
    .loading-img{
        width: .8rem;
        height: .8rem;
    }
}
</style>