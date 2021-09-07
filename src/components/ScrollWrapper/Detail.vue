<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <detail-swiper :picDatas="detailData.pics"></detail-swiper>
      <view-detail
        v-if="field === 'view'"
        :name="detailData.name"
        :score="detailData.score"
        :starNum="Number(detailData.star)"
        :area="detailData.address"
        :price="detailData.default_price"
        :openDateTime="detailData.open_datetime"
        :tipText="detailData.tip"
        :intro="detailData.intro"
        :ticketIntro="detailData.ticket_info"
      ></view-detail>
      <food-detail
        v-if="field === 'food'"
        :name="detailData.name"
        :score="detailData.score"
        :starNum="Number(detailData.star)"
        :area="detailData.address"
        :price="detailData.default_price"
        :openDateTime="detailData.open_datetime"
        :recom="detailData.recom"
        :keywordList="detailData.comment_keyword"
      ></food-detail>
      <hotel-detail
        v-if="field === 'hotel'"
        :name="detailData.name"
        :starNum="Number(detailData.star)"
        :score="detailData.score"
        :area="detailData.address"
        :price="detailData.default_price"
        :service="detailData.service"
      ></hotel-detail>
      <ktv-detail
        v-if="field === 'ktv'"
        :name="detailData.name"
        :starNum="Number(detailData.star)"
        :score="detailData.score"
        :area="detailData.address"
        :price="detailData.default_price"
        :openDateTime="detailData.open_datetime"
        :recom="detailData.recom"
        :keywordList="detailData.comment_keyword"
      ></ktv-detail>
      <massage-detail
        v-if="field === 'massage'"
        :name="detailData.name"
        :starNum="Number(detailData.star)"
        :score="detailData.score"
        :area="detailData.address"
        :price="detailData.default_price"
        :openDateTime="detailData.open_datetime"
        :recom="detailData.recom"
        :keywordList="detailData.comment_keyword"
      ></massage-detail>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { DetailModule } from "../../modules/details";
import tools from "utils/tools";
import DetailSwiper from "./Sub/Swiper.vue";
import ViewDetail from "./Detail/View.vue";
import FoodDetail from "./Detail/Food.vue";
import HotelDetail from "./Detail/Hotel.vue";
import KtvDetail from "./Detail/Ktv.vue";
import MassageDetail from "./Detail/Massage.vue";
export default {
  name: "DetailScrollWrapper",
  components: {
    DetailSwiper,
    ViewDetail,
    FoodDetail,
    HotelDetail,
    KtvDetail,
    MassageDetail
  },
  methods: {
    getDetail(field, id) {
      const detailModule = new DetailModule();
      detailModule.getDetail(field, id).then(res => {
        if (res && res.status === 0) {
          const data = res.data;
          // 轮播图src转成数组
          data.pics && (data.pics = tools.JSONtoArray(data.pics));
          // 评论关键词
          data.comment_keyword &&
            (data.comment_keyword = tools.strToArray(data.comment_keyword));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          // 服务
          data.service && (data.service = tools.JSONtoArray(data.service));
          this.detailData = data;
          console.log(this.detailData);
        }
      });
    }
  },
  data() {
    return {
      field: "",
      id: 0,
      detailData: {}
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper);
    this.field = this.$route.query.field;
    this.id = this.$route.query.id;
    this.getDetail(this.field, this.id);
  }
};
</script>

<style lang="scss" scoped></style>
