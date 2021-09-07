<template>
  <div class="hotel-item">
    <router-link
      :to="{ path: '/detail', query: { field: 'hotel', id: data.id } }"
    >
      <div class="img">
        <img class="img-item" :src="data.img" :alt="data.name" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <div class="stars">
          <span>{{ data.star }}分</span>
        </div>
        <p class="keyword">
          <span class="badge"
            >{{ data.area }}
          </span>
        </p>
        <p class="others">
          <span
            ><span class="price">￥{{ data.default_price }}</span
            >起</span
          >
          <span class="city">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HotelListSub",
  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/mixin.scss";
@import "~styles/variable.scss";
.hotel-item {
  position: relative;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  width: 100%;
  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;
    .img-item {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    position: absolute;
    top: 0.1rem;
    left: 1.2rem;
    .title {
      width: 2.45rem;
      font-size: 0.18rem;
      color: #000;
      line-height: 0.2rem;
      @include ellipsis;
    }
    .stars {
      font-size: 0.16rem;
      color: $starColor;
      span {
        line-height: 0.3rem;
      }
    }
    .keyword {
      @include ellipsis;
      width: 2.5rem;
      font-size: 0.14rem;
      color: #999;
    }
    .others {
      @include flex-row;
      justify-content: space-between;
      line-height: 0.4rem;
      .price {
        color: $defaultGreen;
        font-size: 0.17rem;
      }
      .city {
        font-size: 0.15rem;
      }
    }
  }
}
</style>
