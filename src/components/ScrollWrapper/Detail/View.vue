<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-area :area="area"></detail-area>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :openDateTime="openDateTime"></detail-open-date-time>
    <detail-tip :tipText="tipText"></detail-tip>
    <detail-intro-index :intro="intro"></detail-intro-index>
    <detail-ticket-intro :ticketIntro="ticketIntro"></detail-ticket-intro>
  </div>
</template>

<script>
import DetailName from "./Sub/Name.vue";
import DetailStars from "./Sub/Stars.vue";
import DetailArea from "./Sub/Area.vue";
import DetailPrice from "./Sub/Price.vue";
import DetailOpenDateTime from "./Sub/DateTime.vue";
import DetailTip from './Sub/Tip.vue';
import DetailTitle from './Sub/TitleIndex.vue';
import DetailIntroIndex from './Sub/IntroIndex.vue';
import DetailTicketIntro from './Sub/TicketIntro.vue';
export default {
  name: "ViewDetail",
  components: {
    DetailName,
    DetailStars,
    DetailArea,
    DetailPrice,
    DetailOpenDateTime,
    DetailTip,
    DetailTitle,
    DetailIntroIndex,
    DetailTicketIntro,
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    area: String,
    price: String,
    openDateTime: String,
    tipText:String,
    intro:String,
    ticketIntro:String
  }
};
</script>

<style lang="scss" scoped></style>
