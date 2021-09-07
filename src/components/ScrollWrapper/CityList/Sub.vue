<template>
  <div class="city-item">
    <span class="city" @click="onCityClick(cityInfo)">{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "CityListSub",
  props: {
      cityInfo:Object
  },
  methods:{
      // 把this.selectCity 映射为 this.$store.commit('selectCity')
      ...mapMutations(['selectCity']),
      /* 点击城市，更改状态 */
      onCityClick(cityInfo){
          this.selectCity(cityInfo);
          // 回到首页
          this.$router.push('/')
      }
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.city-item{
    @include flex-row;
    align-items: center;
    height: .5rem;
    padding-left: .15rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    font-size: .16rem;
}
</style>
