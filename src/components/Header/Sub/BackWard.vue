<template>
  <div class="back-ward" @click="onRouterBack">
      <span class="iconfont icon-back"></span>
  </div>
</template>

<script>
export default {
name:'BackWard',
methods:{
    onRouterBack(){
        this.$router.go(-1);
    }
}
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.back-ward{
    position: absolute;
    top: 0;
    left: 0;
    @include vh-center;
    width:$headerHeight;
    height: $headerHeight;
}
</style>