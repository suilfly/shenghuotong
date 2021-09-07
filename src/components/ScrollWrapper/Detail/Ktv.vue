<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-area :area="area"></detail-area>
    <detail-price :price="price"></detail-price>
    <detail-title-index :recom="recom"></detail-title-index>
    <detail-keyword-index :keywordList="keywordList"></detail-keyword-index>
  </div>
</template>

<script>
import DetailName from "./Sub/Name.vue";
import DetailStars from "./Sub/Stars.vue";
import DetailArea from "./Sub/Area.vue";
import DetailPrice from "./Sub/Price.vue";
import DetailOpenDateTime from "./Sub/DateTime.vue";
import DetailTitleIndex from "./Sub/TitleIndex.vue";
import DetailKeywordIndex from "./Sub/KeywordIndex.vue";
export default {
  name: "KtvDetail",
  components: {
    DetailName,
    DetailStars,
    DetailArea,
    DetailPrice,
    DetailOpenDateTime,
    DetailTitleIndex,
    DetailKeywordIndex
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    area: String,
    price: String,
    openDateTime: String,
    recom: String,
    keywordList: Array
  }
};
</script>

<style lang="scss" scoped></style>
