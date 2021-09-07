<template>
  <div class="hotel-wrapper">
    <hotel-list-sub
      v-for="item of hotelList"
      :data="item"
      :key="item.id"
    ></hotel-list-sub>
  </div>
</template>

<script>
import HotelListSub from "./Sub.vue";
export default {
  name: "HotelList",
  components: {
    HotelListSub
  },
  props: {
    hotelList: Array
  }
};
</script>

<style></style>
