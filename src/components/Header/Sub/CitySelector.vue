<template>
  <div class="city">
    <router-link to="city">
      <span class="city-name">{{ cityName }}</span>
      <span class="iconfont icon-down"></span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "CitySelector",
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState(['cityName'])
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/mixin.scss";
@import "~styles/variable.scss";
.city {
  font-size: 0.15rem;
  width: 0.6rem;
  height: $headerHeight;
}
a{
    @include vh-center;
    width: 100%;
    height: $headerHeight;
    .city-name{
        font-size: .16rem;
        font-weight: bold;
    }
    .iconfont{
        font-size:.08rem;
        margin-left: .03rem;
    }
}
</style>
