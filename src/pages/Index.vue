<template>
  <div class="container">
      <home-header/>
      <home-wrapper></home-wrapper>
  </div>
</template>

<script>
import HomeHeader from 'components/Header/Home';
import HomeWrapper from 'components/ScrollWrapper/Home'
export default {
  name:'Index',
  components:{
    HomeHeader,
    HomeWrapper
  }
}
</script>

<style scoped lang="scss">
.container{
 /*  position: relative; */
}
</style>