<template>
  <div>
    <div class="block">
      <el-carousel height="500px">
        <el-carousel-item>
          <img src="./../images/banner1.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img src="./../images/banner2.jpg">
        </el-carousel-item>

        <!-- <el-carousel-item :for="item in banner">
            <img :src="item.img" alt="">
          </el-carousel-item>  -->

      </el-carousel>
    </div>
    <div>
      <div class="contentBox">
        <el-row>
          <el-col :span="6">
            <a href=""><img src="./../images/01.jpg" alt=""></a>
          </el-col>
          <el-col :span="6">
            <a href=""><img src="./../images/02.jpg" alt=""></a>
          </el-col>
          <el-col :span="6">
            <a href=""><img src="./../images/03.jpg" alt=""></a>
          </el-col>
          <el-col :span="6">
            <a href=""><img src="./../images/04.jpg" alt=""></a>
          </el-col>
        </el-row>
        <p class="tj-tile">
          <a><img src="https://wochu.oss-cn-hangzhou.aliyuncs.com/upload/58e5f698-542a-4faa-afeb-b680b158afd6.jpg"></a>
        </p>
        <div class="goodsList clear">
          <div class="goodsLeft left">
            <img src="./../images/goods-l.jpg" alt="">
            <p>
              <a href="">更多 >></a>
            </p>
          </div>
          <!-- <div class="goodsRight right">
                      <el-row>
                        <el-col :span="6" :for="item in goods">
                          <img :src="item.img" alt="">
                          <p>{{item.title}}</p>
                          <p>{{item.originalPrice}}</p>
                          <p>{{item.presentPrice}}</p>
                        </el-col>

                      </el-row>
                </div> -->
        </div>
      </div>

    </div>
  </div>
</template>
<style>

</style>
<script>
export default {
  data() {
    return {
      banner: [
        { "img": "./images/banner1.jpg" },
        { "img": "./images/banner2.jpg" }
      ],
      // goods: [
      // { "img": "./../images/goods1.jpg" ,"title":"小青菜350g","originalPrice":"3.99","presentPrice":"1.99"},
      // { "img": "./../images/goods2.jpg" ,"title":"小青菜350g","originalPrice":"3.99","presentPrice":"1.99"}]
    }
  }
}
</script>
<style lang="less">
.el-carousel {
  img {
    display: block;
    width: 100%;
    height: 500px;
  }
}

.contentBox {
  width: 1280px;
  margin: 0 auto;
  .el-row {
    margin-top: 20px;
    height: 164px;
  }
  .tj-tile {
    height: 58px;
    width: 100%;
    color: #6ca96e;
    font-size: 24px;
    line-height: 54px;
    border-top: 4px solid #e4f4dc;
  }
  .goodsList {
    .goodsLeft {
      width: 300px;
      p {
        text-align: left;
        a {
          color: #000;
          &:hover {
            color: #6ca96e;
          }
        }
      }
    }
    .goodsRight {
      width: 980px;
      .el-row {
        .el-col {
          height: 310px;
          img {
            width: 224px;
            height: 224px;
          }
        }
      }
    }
  }
}
</style>



