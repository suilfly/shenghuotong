<template>
  <div class="price-bd">
      <span class="iconfont icon-price">

      </span>
      <span class="price-text">￥{{price}}元起</span>
  </div>
</template>

<script>
export default {
name:'DetailPrice',
props:{
    price:{
        type:String,
        default(){
            return '...'
        }
    }
}
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.price-bd{
    @include flex-row;
    height: .44rem;
    background-color: #fff;
    align-items: center;
    padding: 0 .15rem;
    border-bottom: 1px solid #ddd;
    .icon-price{
        font-size: .14rem;
        color: #000;
    }
    .price-text{
        color: #d35400;
        font-size: .18rem;
    }
}
</style>