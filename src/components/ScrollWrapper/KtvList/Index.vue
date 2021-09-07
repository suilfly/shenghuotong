<template>
  <div class="massage-wrapper">
    <ktv-list-sub
      v-for="(item,index) of ktvList"
      :key="index"
      :data="item"
    ></ktv-list-sub>
  </div>
</template>

<script>
import KtvListSub from "./Sub.vue";
export default {
  name: "KtvList",
  components: {
    KtvListSub
  },
  props: {
    ktvList: Array
  }
};
</script>

<style></style>
