<template>
  <div>
    <div class="block">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in banner">
          <img :src="item.img" alt="">
        </el-carousel-item>
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
          <div class="goodsRight right">
            <el-row>
              <el-col v-for="item in goods" class="goods-item" :span="6">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
                <p>{{item.originalPrice}}</p>
                <p>{{item.presentPrice}}</p>
                <div><img src="./../images/addcart.png" alt=""></div>
              </el-col>

            </el-row>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style>

</style>
<script>
import banner1 from './../images/banner1.jpg';
import banner2 from './../images/banner2.jpg';
import pic1 from './../images/goods1.jpg';
import pic2 from './../images/goods2.jpg';
import pic3 from './../images/goods3.jpg';
import pic4 from './../images/goods4.jpg';
import pic5 from './../images/goods5.jpg';
import pic6 from './../images/goods6.jpg';
import pic7 from './../images/goods7.jpg';
import pic8 from './../images/goods8.jpg';
import addtocar from './../images/addcart.png';
export default {
  data() {
    return {
      banner: [
        { "img": banner1 },
        { "img": banner2 }
      ],
      goods: [
        { "img": pic1, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
        { "img": pic2, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
        { "img": pic3, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
        { "img": pic4, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
        { "img": pic5, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
        { "img": pic6, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
        { "img": pic7, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
        { "img": pic8, "title": "小青菜350g", "originalPrice": "3.99", "presentPrice": "1.99" },
      ]
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
  overflow: auto;
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
          position: relative;
          p {
            text-align: left;
            text-indent: 20px;
          }
          img {
            width: 100%;
            height: 224px;
          }
          div {
            position: absolute;
            right: 10px;
            bottom: 10px;
            width: 36px;
            height: 36px;
            img {
              width: 36px;
              height: 36px;
            }
          }
        }
      }
    }
  }
}
</style>



