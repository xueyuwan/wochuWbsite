<template>
  <div>
    <div class="wochu-desc">
      <div class="wochu-info">
        <ul>
          <li>
            <i><img alt="" src="./../images/qqcg.png"></i>
            <div class="wochu-msg">
              <div class="msg-name">全球采购</div>
              <div class="msg-desc">全球原产地采购保证品质</div>
            </div>
          </li>
          <li>
            <i><img alt="" src="./../images/zycf.png"></i>
            <div class="wochu-msg">
              <div class="msg-name">中央厨房</div>
              <div class="msg-desc">12000平米自动化中央厨房</div>
            </div>
          </li>
          <li>
            <i><img alt="" src="./../images/llbx.png"></i>
            <div class="wochu-msg">
              <div class="msg-name">冷链保鲜</div>
              <div class="msg-desc">自建物流全程专业冷链</div>
            </div>
          </li>
          <li>
            <i><img alt="" src="./../images/pzbz.png"></i>
            <div class="wochu-msg">
              <div class="msg-name">品质保障</div>
              <div class="msg-desc">12项工序确保食材新鲜</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="wrap">
        <dl class="col1">
          <dt><img alt="" src="./../images/xszn.png">
            <span>购物指南</span>
          </dt>
          <dd>
            <p>
              <a href="/Help/Gouwuliucheng">购物流程</a>
            </p>
            <p>
              <a href="/Help/Selectorder">订单查询</a>
            </p>
            <p>
              <a href="/Help/Lianxikefu">联系客服</a>
            </p>
          </dd>
        </dl>
        <dl class="col2">
          <dt><img alt="" src="./../images/fkfs.png">
            <span>支付方式</span>
          </dt>
          <dd>
            <p>
              <a href="/Help/Huodaofukuan">货到付款</a>
            </p>
            <p>
              <a href="/Help/Payonline">网上支付</a>
            </p>
            <p>
              <a href="/Help/Jifenpay">积分支付</a>
            </p>
            <p>
              <a href="/Help/Youhuima">优惠码</a>
            </p>
          </dd>
        </dl>
        <dl class="col3">
          <dt><img alt="" src="./../images/psfs.png">
            <span>配送方式</span>
          </dt>
          <dd>
            <p>
              <a href="/Help/Quanchenglenglian">全程冷链</a>
            </p>
            <p>
              <a href="/Help/Yunfeibiaozhun">运费标准</a>
            </p>
            <p>
              <a href="/Help/Peisongfanwei">配送范围</a>
            </p>
            <p>
              <a href="/Help/Peisongshijian">配送时间</a>
            </p>
          </dd>
        </dl>
        <dl class="col4">
          <dt><img alt="" src="./../images/shfw.png">
            <span>售后保障</span>
          </dt>
          <dd>
            <p>
              <a href="/Help/Tuihuanhuozhengce">退换货政策</a>
            </p>
            <p>
              <a href="/Help/Tuihuanhuoliucheng">退换货流程</a>
            </p>
            <p>
              <a href="/Help/Changjianwenti">常见问题</a>
            </p>
            <p>
              <a href="/Help/Tousuyujianyi">投诉与建议</a>
            </p>
          </dd>
        </dl>
        <dl class="col5">
          <dt><img alt="" src="./../images/gywm.png">
            <span>关于我们</span>
          </dt>
          <dd>
            <p>
              <a href="/Help/Aboutus">公司介绍</a>
            </p>
            <p>
              <a href="/Help/Meitibaodao">媒体报道</a>
            </p>
            <p>
              <a href="/Help/Lianxiwomen">联系我们</a>
            </p>
          </dd>
        </dl>
      </div>
      <div class="copyright">
        <p>
          沪ICP备15001583号-1 Copyright©2015-2016
          <a href="http://www.wochu.cn/">我厨（上海）科技有限公司</a>版权所有
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.wochu-desc {
  width: 100%;
  background: #f8f8f8;
  position: relative;
  float: left;
  margin: 20px 0;
  .wochu-info {
    width: 1280px;
    margin: 0 auto;
    height: 76px;
    ul {
      width: 100%;
      height: 76px;
      float: left;
      li {
        width: 25%;
        height: 80px;
        float: left;
        line-height: 25px;
        text-align: left;
        i {
          width: 60px;
          height: 60px;
          float: left;
          margin-top: 8px;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .wochu-msg {
          float: left;
          padding-left: 15px;
          .msg-name {
            padding-top: 8px;
            color: #1a1a1a;
            font-size: 16px;
          }
          .msg-desc {
            padding-bottom: 8px;
            color: #477626;
            font-size: 14px;
          }
        }
      }
    }
  }
}

.footer {
  width: 100%;
  position: relative;
  float: left;
  .wrap {
    margin: 10px auto 0;
    height: 160px;
    width: 1280px;
    dl {
      width: 206px;
      float: left;
      margin-left: 50px;
      display: inline;
      dt {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-indent: 40px;
        img {
          margin-left: -40px;
        }
        span {
          vertical-align: top;
          font-size: 16px;
          color: #1a1a1a;
        }
      }
      dd {
        border-left: 1px dashed #A8A8A8;
        padding-left: 20px;
        height: 110px;
        min-height: 110px;
        margin: 10px 0 0 20px;
        color: #1a1a1a;
        font-size: 14px;
        a {
          color: #666;
          line-height: 22px;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    color: #808080;
    font-size: 14px;
    margin: 70px 0 70px 0;
    line-height: 20px;
    a {
      color: #808080;
      font-size: 14px;
    }
  }
}

.footer dl:first-child {
  width: 206px;
  float: left;
  margin-left: 5px;
  display: inline;
}
</style>

