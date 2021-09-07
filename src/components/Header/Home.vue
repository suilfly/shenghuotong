<template>
<!-- 首页的专用header -->
  <header class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </header>
</template>

<script>
import CitySelector from './Sub/CitySelector.vue'
import FalseInput from './Sub/FalseInput.vue'
export default{
    name:'HomeHeader',
    components:{
      CitySelector,
      FalseInput
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.header{
    @include flex-row;
    width:100%;
    height: $headerHeight;
    background-color: $defaultBgColor;
    position: fixed;
    z-index: 1;
}
</style>