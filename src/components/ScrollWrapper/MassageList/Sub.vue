<template>
  <div class="massage-item">
      <router-link :to="{ path: '/detail', query: { field: 'massage', id: data.id } }">
        <div class="img">
            <img :src="data.img" :alt="data.name" class="massage-img" />
        </div>
        <div class="info">
            <h1 class="title">{{data.name}}</h1>
            <p class="stars">
                <stars :starNum="Number(data.star)"></stars>
                <span class="score">{{data.score}}分</span>
            </p>
            <p class="others">
                 <span><span class="price">￥{{data.default_price}}</span>元</span>
                <span class="city">{{data.city_name}}</span>
            </p>
        </div>
      </router-link>
  </div>
</template>

<script>
import Stars from '../Sub/Stars.vue';
export default {
name:'MassageListSub',
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
.massage-item{
    @include flex-row;
    position: relative;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    .img{
        width: 1.2rem;
        height: 1.2rem;
        padding: .1rem;
        box-sizing: border-box;
        .massage-img{
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
            line-height: .5rem;
            .price{
                color:#333
            }
        }
        .others{
            display: flex;
            justify-content: space-between;
            font-size: .14rem;
            line-height: .4rem;
            /* padding-top: .005rem; */
            .price{
                color: orange;
                font-size: .17rem;
            }
        }
    }
}
</style>