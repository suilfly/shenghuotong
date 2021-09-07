<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>

    <search-scroll :isError="isError" :data="data"></search-scroll>
  </div>
</template>

<script>
import CommonHeader from 'components/Header/Common';
import SearchInput from 'components/SearchInput/Index';
import SearchScroll from '../components/ScrollWrapper/Search.vue';
import tools from "utils/tools";

export default {
name:'Search',
components:{
  CommonHeader,
  SearchInput,
  SearchScroll,
 
},
methods:{

  onSearch(res){
    if(res && res.status == 0){
      this.isError = false;
      const data = res.data;
      data.foodDatas = tools.formatJSON(data.foodDatas,'keyword');
      this.data = data;console.log(data)
    }else{
      this.data = res;
      this.isError = true;
    }
  }
},
data(){
  return{
    title:'商家搜索',
    data:{},
    isError:false
  }
}
}
</script>

<style scoped lang="scss">

</style>