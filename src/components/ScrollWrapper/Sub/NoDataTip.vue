<template>
  <div class="no-data-tip">
      <span class="text">{{text}}</span>
  </div>
</template>

<script>
export default {
name:'NoDataTip',
data(){
    return{
        text:'——没有搜索到相关结果——'
    }
}
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.no-data-tip{
    @include vh-center;
    height: 2rem;
    .text{
        color: #999;
        font-size: .16rem;
    }
}
</style>