<template>
  <div class="service-wrapper">
    <detail-title :icon="'icon-service'" :title="'商家服务'"></detail-title>
    <div class="service-content">
      <p class="parking">停车场：{{ hasParking }}</p>
      <p class="wifi">WIFI：{{ hasWifi }}</p>
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title.vue";
export default {
  name: "DetailService",
  components: {
    DetailTitle
  },
  props: {
    service: {
      type: Object,
      default() {
        return {
          loading: true
        };
      }
    }
  },
  computed: {
    hasParking() {
      if (this.service.loading) {
        return "加载中";
      } else {
        return this.service.parking ? "有" : "无";
      }
    },
    hasWifi() {
      if (this.service.loading) {
        return "加载中";
      } else {
        return this.service.wifi ? "有" : "无";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.service-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  margin-top: 0.1rem;
  border-bottom: 1px solid #ddd;
  .service-content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.19rem;
    box-sizing: border-box;
  }
}
</style>
