<template>
  <div class="home-title">
      <p>{{title}}</p>
  </div>
</template>

<script>
export default {
    name:'HomeTitle',
    props:{
        title:{
            type:String,
            default(){
                return '一线生活通'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.home-title{
    display: flex;
    align-items: center;
    height: .5rem;
    margin-top: .1rem;
    padding-left: .15rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    p{
        font-size: .18rem;
        color: #000;
        font-weight: bold;
    }
}
</style>