<template>
  <div class="service-wrapper">
      <detail-title :icon="'icon-service'" :title="''"></detail-title>
  </div>
</template>

<script>
import DetailTitle from './Title.vue';
export default {
name:'DetailService',
components:{
    DetailTitle
},
props:{}
}
</script>

<style>

</style>