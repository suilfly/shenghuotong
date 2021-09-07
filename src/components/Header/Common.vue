<template>
  <header class="header">
      <back-ward></back-ward>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
import BackWard from './Sub/BackWard.vue'
export default {
  name: "CommonHeader",
  components:{
      BackWard
  },
  props:{
      title:{
          type:String,
          default(){
              return '生活通'
          }
      }
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.header{
    position: relative;
    @include vh-center;
    height: $headerHeight;
    background-color: $defaultBgColor;
    /* font-size: .15rem; */
}
</style>
