<template>
  <div class="tip-bd">
      <span class="iconfont icon-jihua"></span>
      <span class="tip-text">{{tipText}}</span>
  </div>
</template>

<script>
export default {
name:'DetailTip',
props:{
    tipText:String
}
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.tip-bd{
    @include flex-row;
    height: .44rem;
    padding: 0 .15rem ;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    .icon-jihua{
        font-size: .18rem;
        color: #999;
        line-height: .44rem;
    }
    .tip-text{
        font-size:.14rem;
        line-height: .44rem;
    }
}
</style>