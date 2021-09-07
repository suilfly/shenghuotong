<template>
  <div class="city-item" @click="onSelectCity(myCityId)">
    <p :class="['city-name', { active: curCityId == index }]">{{ cityName }}</p>
    <p :class="['line-style', { line: curCityId == index }]"></p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ListCitySelectorSub",
  props: {
    cityName: String,
    myCityId: String,
    curCityId: String,
    index: Number
  },
  methods: {
      ...mapMutations(['selectCity']),
    onSelectCity(cityId) {
      this.selectCity({cityId,cityName:this.cityName});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
.city-item {
  height: 0.44rem;
  width: 20%;
  box-sizing: border-box;
  .city-name {
    text-align: center;
    line-height: 0.42rem;
  }
  .active {
    color: $defaultGreen;
  }
  .line {
    height: 0.02rem;
    width: 100%;
    margin-top: 1px;
    background-color: $defaultGreen;
  }
}
</style>
