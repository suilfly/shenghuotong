<template>
  <div class="title-bd">
      <span :class="['iconfont',icon]"></span>
      <span class="title-text">{{title}}</span>
  </div>
</template>

<script>
export default {
name:'DetailTitle',
props:{
    icon:String,
    title:String
}
}
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';
.title-bd{
    display: flex;
    height: .44rem;
    padding: 0 .15rem ;
    background-color: #fff;
    line-height: .44rem;
    align-items: center;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    .iconfont{
        font-size: .16rem;
        color:$defaultGreen;
    }
    .title-text{
        font-size:.14rem;
        line-height: .44rem;
        color:$defaultGreen;
    }
}
</style>