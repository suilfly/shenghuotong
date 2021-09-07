<template>
  <div class="scroll-wrapper" ref="wrapper">
      <div class="scroll-content">
          <!-- 滚动的内容 -->
        <current-city></current-city>
        <city-list></city-list>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import CurrentCity from './CityList/CurrentCIty.vue';
import CityList from './CityList/Index.vue';
import cityDatas from "data/cities";
export default {
name:'CityScrollWrapper',
components:{
    CurrentCity,
    CityList
},
mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper);
},
data(){
  return{
    list:cityDatas
  }
}
}
</script>

<style lang="scss" scoped>

</style>