<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <error :errorShow="isError"></error>
      <div v-show="!isError">
        <list-city-selector :cityId="cityId"></list-city-selector>

        <view-list
          v-if="field === 'view'"
          :viewDatas="listDatas[cityId]"
        ></view-list>
        <food-list
          v-if="field === 'food'"
          :foodDatas="listDatas[cityId]"
        ></food-list>
        <massage-list
          v-if="field === 'massage'"
          :massageList="listDatas[cityId]"
        ></massage-list>
        <ktv-list
          v-if="field === 'ktv'"
          :ktvList="listDatas[cityId]"
        ></ktv-list>
        <hotel-list
          v-if="field === 'hotel'"
          :hotelList="listDatas[cityId]"
        ></hotel-list>
        <loading :loadingShow="loadingShow"></loading>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { ListModule } from "modules/list";
import { mapState } from "vuex";
import FoodList from "./FoodList/Index.vue";
import HotelList from "./HotelList/Index.vue";
import ViewList from "./ViewList/Index.vue";
import MassageList from "./MassageList/Index.vue";
import KtvList from "./KtvList/Index.vue";
import ListCitySelector from "./List/citySelector/Index.vue";
import tools from "utils/tools";
import Loading from "./Sub/Loading.vue";
import Error from "./Sub/Error.vue";
export default {
  name: "ListScrollWapper",
  data() {
    return {
      listDatas: {},
      loadingShow: true,
      isError: false
    };
  },
  components: {
    ViewList,
    HotelList,
    FoodList,
    MassageList,
    KtvList,
    ListCitySelector,
    Loading,
    Error
  },
  activated() {
    /* if(this.mycityId !== this.cityId){
      // 更新视图
      this.getListDatas(this.cityId, this.field);
    } */
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    console.log(this.field, this.cityId);
    this.getListDatas(this.cityId, this.field);
  },
  computed: {
    ...mapState(["cityId", "field"])
  },
  methods: {
    getListDatas(cityId, field) {
      if (!this.listDatas[cityId]) {
        const listModule = new ListModule();
        //     this.listDatas = [];
        this.loadingShow = true;
        listModule.getListDatas(cityId, field).then(res => {
          if (res && res.status === 0) {
            setTimeout(() => {
              let data = res.data;
              this.listDatas[cityId] = tools.formatJSON(data, "keyword");
              //    console.log(this.listDatas);
              this.loadingShow = false;
            }, 500);
          } else {
            this.isError = true;
            console.log({
              statusCode: res.status,
              errorCode: res.error
            });
          }
        });
      } else {
        this.loadingShow = true;
      }
    }
  },
  watch: {
    cityId() {
      this.getListDatas(this.cityId, this.field);
    }
  }
};
</script>

<style lang="scss" scoped></style>
