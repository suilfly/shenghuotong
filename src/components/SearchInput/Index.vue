<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search">🔍</span>
      <input
        type="text"
        class="input"
        v-model="keyword"
        @input="onSearch"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>

<script>
import tools from "utils/tools";
import { SearchModule } from "modules/search";
import { mapState } from "vuex";
export default {
  name: "SearchInput",
  data() {
    return {
      placeholder: "美食 / 景点 / 酒店 / 按摩 / KTV",
      keyword: ""
    };
  },
  computed: {
    ...mapState(["cityId"])
  },
  methods: {
    onSearch: tools.throttle(function() {
      const keyword = tools.trimSpace(this.keyword);
      if (keyword.length <= 0) {
        // 触发自定义事件
        this.$emit("onSearch", {});
        return;
      }
      const searchModule = new SearchModule();
      searchModule.searchAction(keyword, this.cityId).then(res => {
        if (res && res.status === 0) {
          this.$emit("onSearch", res);
        }else{
            this.$emit('onSearch',res);
        }
      });
    }, 1000)
  }
};
</script>

<style lang="scss" scoped>
.search-input {
  height: 0.44rem;
  padding: 0.06rem 0.15rem;
  background-color: #fff;
  box-sizing: border-box;
  .input-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    .iconfont {
      position: absolute;
      top: 0.08rem;
      left: 0.08rem;
      font-size: 0.16rem;
    }
    .input {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 0.03rem;
      font-size: 0.14rem;
      box-sizing: border-box;
      text-indent: 2em;
    }
  }
}
</style>
