<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-area :area="area"></detail-area>
    <detail-price :price="price"></detail-price>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
import DetailName from "./Sub/Name.vue";
import DetailStars from "./Sub/Stars.vue";
import DetailArea from "./Sub/Area.vue";
import DetailPrice from "./Sub/Price.vue";
import DetailOpenDateTime from "./Sub/DateTime.vue";
import DetailTitleIndex from "./Sub/TitleIndex.vue";
import DetailService from "./Sub/ServiceIndex.vue";
export default {
  name: "HotelDetail",
  components: {
    DetailName,
    DetailStars,
    DetailArea,
    DetailPrice,
    DetailOpenDateTime,
    DetailTitleIndex,
    DetailService
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    area: String,
    price: String,
    openDateTime: String,
    recom: String,
    keywordList: Array,
    service:Object
  },
  data(){
    return{
      title:'服务提供'
    }
  }
};
</script>

<style lang="scss" scoped></style>
