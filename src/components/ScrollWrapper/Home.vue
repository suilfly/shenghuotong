<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
      <!-- 滚动的内容 -->
      <category-icons></category-icons>
      <div class="scroll-list" v-show="!isError">
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :viewDatas="homeDatas.viewDatas"></view-list>
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :foodDatas="homeDatas.foodDatas"></food-list>
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotelList="homeDatas.hotelDatas"></hotel-list>
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massageList="homeDatas.massageDatas"></massage-list>
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktvList="homeDatas.ktvDatas"></ktv-list>
      </div>
      <!-- 网络错误处理 -->
      <error :errorShow="isError"></error>
    </div>
  </div>
</template>

<script>
import CategoryIcons from "./CategoryIcons/Index.vue";
import HomeTitle from "./Sub/HomeTitle.vue";
import ViewList from "./ViewList/Index.vue";
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import MassageList from "./MassageList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import Error from './Sub/Error.vue';
import BetterScroll from "better-scroll";
import tools from "utils/tools";
import { mapState } from "vuex";
import { IndexModel } from "@/modules/index";
export default {
  name: "HomeWrapper",
  components: {
    CategoryIcons,
    HomeTitle,
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Error
  },
  computed: {
    // 获取当前state中的cityId, this.cityId 映射到 this.$store.state.cityId
    ...mapState(["cityId"])
  },
  activated(){
    if(this.curCityId !== this.cityId){
      this.curCityId = this.cityId;
      this.getHomeDatas(this.curCityId);
    }
  },
  mounted() {
   // console.log(111)

    this.getHomeDatas(this.cityId); // 获取首页的城市数据
  },
  methods: {
    getHomeDatas(cityId) {
      const indexModel = new IndexModel();
      let vmData = this.homeDatas,
        resData,
        vm = this;
      indexModel.getHomeDatas(cityId).then(
        res => {
          if (res && res.status === 0) {
            resData = res.data;
            // 将请求到的数据赋值
            vmData.foodDatas = tools.formatJSON(resData.foodDatas, "keyword");
            vmData.hotelDatas = tools.formatJSON(resData.hotelDatas, "area");
            vmData.ktvDatas = resData.ktvDatas;
            console.log(vmData.ktvDatas);
            vmData.massageDatas = resData.massageDatas;
            vmData.viewDatas = resData.viewDatas;
            vm.isError = false;
            //  console.dir(vmData.foodDatas);
          } else {
            vm.isError = true;
            console.log({
              statusCode:res.status,
              errorCode:res.error
            })
          }
        },
        err => {
          vm.isError = true;
        }
      ).then(()=>{
        this.scroll = new BetterScroll(this.$refs.wrapper,{click:true});
      });
    }
  },
  data() {
    return {
      homeDatas: {
        foodDatas: [],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        viewDatas: []
      },
      homeTitle: {
        foodTitle: "推荐美食",
        hotelTitle: "推荐酒店",
        ktvTitle: "推荐ktv",
        massageTitle: "推荐按摩",
        viewTitle: "推荐景点"
      },
      isError: false,
      curCityId:0,
    };
  }
};
</script>

<style lang="scss" scoped>
@import '~styles/variable.scss';
.wrapper{
  height: 90vh;
  margin-top: $headerHeight;
  box-sizing: border-box;
}
</style>
