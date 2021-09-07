<template>
  <div class="city-selector-wrapper">
    <list-city-selector-sub
      v-for="(item, index) of cityList"
      :key="index"
      :cityName="item.cityName"
      :curCityId="cityId"
      :myCityId="item.cityId"
      :index="index"
    ></list-city-selector-sub>
  </div>
</template>

<script>
import ListCitySelectorSub from "./Sub.vue";
import cityList from "data/cities";

export default {
  name: "ListCitySelector",
  components: { ListCitySelectorSub },
  props:{
      cityId:String,
  },
  data() {
    return {
      cityList
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
.city-selector-wrapper{
    @include flex-row;
    justify-content: space-evenly;
    height: .44rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}
</style>
