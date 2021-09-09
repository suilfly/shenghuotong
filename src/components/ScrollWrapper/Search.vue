<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <no-data-tip v-show="isNoDataShow"></no-data-tip>
          <error :errorShow="isError"></error>
          <div v-if="data.viewDatas && data.viewDatas.length > 0">
              <home-title title="景点结果"></home-title>
              <view-list :viewDatas="data.viewDatas"></view-list>
          </div>
          <div v-if="data.foodDatas && data.foodDatas.length > 0">
              <home-title title="美食结果"></home-title>
              <food-list :foodDatas="data.foodDatas"></food-list>
          </div>
          <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
              <home-title title="酒店结果"></home-title>
              <hotel-list :hotelList="data.hotelDatas"></hotel-list>
          </div>
          <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
              <home-title title="KTV结果"></home-title>
              <ktv-list :ktvList="data.viewDatas"></ktv-list>
          </div>
          <div v-if="data.massageDatas && data.massageDatas.length > 0">
              <home-title title="按摩结果"></home-title>
              <massage-list :massageList="data.massageDatas"></massage-list>
          </div>
      </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import ViewList from "./ViewList/Index.vue";
import MassageList from "./MassageList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import HomeTitle from './Sub/HomeTitle.vue';
import NoDataTip from './Sub/NoDataTip.vue';
import Error from './Sub/Error.vue';
export default {
name:'SearchScroll',
components:{
 FoodList,
  HotelList,
  ViewList,
  MassageList,
  KtvList,
  HomeTitle,
  NoDataTip,
   Error,
},
computed:{
    isNoDataShow(){
        let data = this.data;
        return (!data.viewDatas || data.viewDatas.length <= 0) &&
                (!data.foodDatas || data.foodDatas.length <= 0)&&
                (!data.hotelDatas || data.hotelDatas.length <= 0)&&
                (!data.ktvDatas || data.ktvDatas.length <= 0)&&
                (!data.massageDatas || data.massageDatas.length <= 0) &&
                (!this.isError)
    }
},
props:{
    data:{
        type:Object
    },
    isError:{
        type:Boolean,
        default(){
            return false;
        }
    }
},
mounted(){
    this.$nextTick(()=>{
        this.scroll = new BetterScroll(this.$refs.wrapper,{click:true});
    });

}
}
</script>

<style lang="scss" scoped>
.wrapper{
  height: 90vh;
}
</style>