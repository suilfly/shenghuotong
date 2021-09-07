<template>
  <div class="item">
    <div
      class="icon"
      @click="onRouteTo(field)"
      :style="{ backgroundColor: bgColor }"
    >
      <span class="iconfont" :class="icon"></span>
    </div>
    <p class="icon-text">{{ iconText }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CategoryIconsSub",
  props: {
    bgColor: String,
    icon: String,
    field: String,
    iconText: {
      type: String,
      default() {
        return "分类";
      }
    }
  },
  methods: {
    ...mapMutations(["selectField"]),
    onRouteTo(field) {
      this.selectField(field);
      // 跳转页面
      this.$router.push("/list");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/mixin.scss";
@import "~styles/variable.scss";
.item {
  @include flex-vertical;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 0.2rem 0;
  .icon {
    width: 0.4rem;
    height: 0.4rem;
    color: #fff;
    border-radius: 50%;
    @include flex-row;
    justify-content: center;
    align-items: center;
    .iconfont {
      color: #fff;
      font-size: 0.20rem;
      line-height: .4rem;
      text-align: center;
      
    }
  }
  .icon-text {
    font-size: 0.14rem;
    margin-top: 0.1rem;
    text-align: center;
  }
}
</style>
