<template>
  <div class="icons-wrapper">
      <category-icons-sub
        v-for="(item,index) of fieldList"
        :bgColor="item.bgColor"
        :icon="item.icon"
        :iconText="item.iconText"
        :field="item.field"
        :key="item.id"
      ></category-icons-sub>
  </div>
</template>

<script>
import CategoryIconsSub from './Sub.vue';
import fieldDatas from 'data/fields';
export default {
 name:'CategoryIcons',
 components:{
     CategoryIconsSub
 },
 data(){
     return{
         fieldList:fieldDatas
     }
 }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.icons-wrapper{
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  /* margin-top:$headerHeight ; */
}
</style>