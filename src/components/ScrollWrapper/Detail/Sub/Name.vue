<template>
  <div class="name-bd">
      <span class="iconfont icon-name"></span>
      <span class="name-text">{{name}}</span>
  </div>
</template>

<script>
export default {
name:'DetailName',
props:{
    name:{
        type:String,
        default(){
            return '名称加载中...'
        }
    }
}
}
</script>

<style lang="scss" scoped>
.name-bd{
    display: flex;
    height: .44rem;
    padding: 0 .15rem ;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    .icon-name{
        font-size: .18rem;
        color: #000;
        line-height: .44rem;
    }
    .name-text{
        font-size:.14rem;
        line-height: .44rem;
    }
}
</style>