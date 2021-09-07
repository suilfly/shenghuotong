<template>
  <div class="view-wrapper">
    <view-list-sub
      v-for="item of viewDatas"
      :data="item"
      :key="item.id"
    ></view-list-sub>
  </div>
</template>

<script>
import ViewListSub from "./Sub.vue";
export default {
  name: "ViewList",
  components: {
    ViewListSub
  },
  props: {
    viewDatas: Array
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.view-wrapper{
    @include flex-row;
    flex-wrap: wrap;
    background-color: #fff;
}
</style>
