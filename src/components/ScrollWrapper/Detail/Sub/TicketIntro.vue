<template>
  <div class="ticket-wrapper">
    <detail-title :icon="'icon-ticket'" :title="'购票信息'"></detail-title>
    <div class="ticket-intro">
      <p class="text">{{ ticketIntro }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title.vue";
export default {
  name: "DetailTicketIntro",
  components: {
    DetailTitle
  },
  props: {
    ticketIntro: String
  }
};
</script>

<style lang="scss" scoped>
.ticket-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  .ticket-intro {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.19rem;
    box-sizing: border-box;
    text-indent: 2em;
  }
}
</style>
