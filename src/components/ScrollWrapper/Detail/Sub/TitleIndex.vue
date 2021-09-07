<template>
  <div class="recom-bd">
    <detail-title icon="icon-recom" :title="title"></detail-title>
    <div class="recom-content" v-show="recom">{{ recom }}</div>
    
  </div>
</template>

<script>
import DetailTitle from "./Title.vue";
export default {
  name: "DetailTitleIndex",
  props: {
    recom: {
      type: String
    },
    title: String,
    service: Object
  },
  components: {
    DetailTitle
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/mixin.scss";
.recom-bd {
  @include flex-vertical;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  .recom-content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.19rem;
    box-sizing: border-box;
    text-indent: 2em;
  }
  .service-content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.19rem;
    box-sizing: border-box;
    text-indent: 1em;
    p{
      padding-bottom: .018rem;
    }
  }
}
</style>
