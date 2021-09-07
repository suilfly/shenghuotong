<template>
  <div class="massage-wrapper">
    <massage-list-sub
      v-for="(item,index) of massageList"
      :key="index"
      :data="item"
    ></massage-list-sub>
  </div>
</template>

<script>
import MassageListSub from "./Sub.vue";
export default {
  name: "MassageList",
  components: {
    MassageListSub
  },
  props: {
    massageList: Array
  }
};
</script>

<style></style>
