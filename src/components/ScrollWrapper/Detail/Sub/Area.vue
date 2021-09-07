<template>
  <div class="area">
      <span class="iconfont icon-area"></span>
      <span class="area-text">{{area}}</span>
  </div>
</template>

<script>
export default {
name:'DetailArea',
props:{
    area:{
        type:String,
        default(){
            return '加载中...';
        }
    }
}
}
</script>

<style lang="scss" scoped>
.area{
    display: flex;
    align-items: center;
    min-height: .44rem;
    padding: .1rem .15rem;
    background-color:#fff ;
    border-bottom:1px solid #ddd;
    box-sizing: border-box;
    .icon-area{
        font-size: .18rem;
       /*  margin-right: .1rem; */
        color: #999;

    }
    .area-text{
        font-size:.14rem;
        line-height: .18rem;
    }
}
</style>