<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-area :area="area"></detail-area>
    <detail-price :price="price"></detail-price>
    <detail-service :service="service"></detail-service>
    <detail-keyword-index :keywordList="keywordList"></detail-keyword-index>
  </div>
</template>

<script>
import DetailName from "./Sub/Name.vue";
import DetailStars from "./Sub/Stars.vue";
import DetailArea from "./Sub/Area.vue";
import DetailPrice from "./Sub/Price.vue";
import DetailOpenDateTime from "./Sub/DateTime.vue";
import DetailService from './Sub/ServiceIndex.vue';
import DetailKeywordIndex from "./Sub/KeywordIndex.vue";
export default {
  name: "MassageDetail",
  components: {
    DetailName,
    DetailStars,
    DetailArea,
    DetailPrice,
    DetailOpenDateTime,
    DetailService,
    DetailKeywordIndex
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    area: String,
    price: String,
    openDateTime: String,
    service:Object,
    keywordList: Array
  }
};
</script>

<style lang="scss" scoped></style>
