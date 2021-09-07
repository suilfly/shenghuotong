<template>
  <div class="date-time-bd">
    <span class="iconfont icon-date-time"></span>
    <span class="date-time-open">{{ openDateTime }}</span>
  </div>
</template>

<script>
export default {
  name: "DetailOpenDateTime",
  props: {
    openDateTime: {
      type: String,
      default() {
        return "加载中...";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.date-time-bd {
  display: flex;
  align-items: center;
  min-height: 0.44rem;
  padding: 0.1rem 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  .icon-date-time {
    font-size: 0.18rem;
    /*  margin-right: .1rem; */
    color: #999;
  }
  .date-time-open {
    font-size: 0.14rem;
    line-height: 0.18rem;
  }
}
</style>
