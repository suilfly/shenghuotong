<template>
  <div class="intro-wrapper">
    <detail-title :icon="'icon-intro'" :title="'详细介绍'"></detail-title>
    <div class="intro-text">
      <p class="intro-p">{{ intro }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title.vue";
export default {
  name: "DetailIntroIndex",
  components: {
    DetailTitle
  },
  props: {
    intro: String
  }
};
</script>

<style lang="scss" scoped>
.intro-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  .intro-text {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.19rem;
    box-sizing: border-box;
    text-indent: 2em;
  }
}
</style>
