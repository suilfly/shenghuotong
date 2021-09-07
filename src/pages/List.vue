<template>
  <div class="container">
      <common-header :title="title"></common-header>
      <list-scroll-wapper></list-scroll-wapper>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CommonHeader from 'components/Header/Common';
import ListScrollWapper from 'components/ScrollWrapper/List';
import fieldList from 'data/fields';
export default {
name:'List',
components:{
  CommonHeader,
  ListScrollWapper
},
computed:{
  ...mapState(['field']),
  title(){
    let field = this.field,
        [item] = fieldList.filter((item)=>item['field'] === field);
    return item.iconText + '列表';
  }
},
data(){
  return{
  }
}
}
</script>

<style scoped lang="scss">

</style>