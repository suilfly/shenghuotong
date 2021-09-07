<template>
  <div class="food-item">
      <router-link :to="{ path: '/detail', query: { field: 'food', id: data.id } }">
        <div class="img">
            <img :src="data.img" :alt="data.name" class="food-img" />
        </div>
        <div class="info">
            <h1 class="title">{{data.name}}</h1>
            <p class="stars">
                <stars :starNum="Number(data.star)"></stars>
                <span class="price">￥{{data.default_price}}/人</span>
            </p>
            <p class="keyword">
                <span class="badge" v-for="item of data.keyword">{{item}}</span>
            </p>
            <p class="others">
                <span class="item">{{data.field}}</span>
                <span class="item">{{data.area}}</span>
            </p>
        </div>
      </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';
export default {
name:'FoodListSub',
components:{
    Stars
},
props:{
    data:Object
}
}
</script>

<style lang="scss" scoped>
@import '~styles/mixin.scss';
@import '~styles/variable.scss';
.food-item{
    @include flex-row;
    position: relative;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    .img{
        width: 1.2rem;
        height: 1.2rem;
        padding: .1rem;
        box-sizing: border-box;
        .food-img{
            width: 100%;
            height: 100%;
        }
    }
    .info{
        position: absolute;
        top: 0;
        right: 0;
        padding: .1rem .1rem 0 1.2rem;
        margin-left: 1.2rem;
        box-sizing: border-box;
        .title{
            @include ellipsis;
            width: 2.45rem;
            font-size:.18rem;
            color:#000;
            line-height: .2rem;
        }
        .stars{
            font-size:.14rem;
            line-height: .3rem;
            .price{
                color:#333
            }
        }
        .keyword{
            height: .2rem;
            line-height: .2rem;
            overflow: hidden;
            .badge{
                margin-right: .05rem;
                padding: 0 .06rem;
                color: rgb(190,158,77);
                background-color: rgb(251,244,228);
            }
        }
        .others{
            display: flex;
            justify-content: space-between;
            font-size: .14rem;
            line-height: .35rem;
            /* padding-top: .005rem; */
        }
    }
}
</style>