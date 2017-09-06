<template>
    <div>
        <div class="topbox">
            <div class="topmain clear">
                <ul class="right clear">
                    <li> <a>[ 登录 ]</a> ,  <a>[ 注册有好礼 ]</a></li>
                    <li></li>
                    <li>仅送上海</li>
                    <li>我厨APP</li>
                    <li>我厨微信</li>
                    <li>4008-527-957</li>
                </ul>
            </div>
            <div class="topnav">
                <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="/">
                        <router-link to="/">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="/need">
                        <router-link to="/need">每日必需</router-link>
                    </el-menu-item>
                    <el-menu-item index="/buy">
                        <router-link to="/buy">入店必抢</router-link>
                    </el-menu-item>
                    <el-menu-item index="/new">
                        <router-link to="/new">新品专区</router-link>
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<style lang="less">
.topbox {
    width: 100%;
    height: 170px;
    background: #f8f8f8;
    .topmain {
        width: 1280px;
        overflow: auto;
        margin: 0 auto;
        ul {
            padding: 5px;
            li {
                float: left;
                line-height: 20px;
                margin-right: 10px;
                border-right: 2px solid #d9d9d9;
                padding-right: 10px;
               
                a{
                    cursor: pointer;
                }
             & :last-child{
                 border: none;
             }
            }
        }
    }
    .topnav {
        width: 100%;
        margin: 0 auto;
        line-height: 60px;
        height: 60px;
        background-color: #6ca96e;
        ul {
            width: 1280px;
            margin: 0 auto;
            background-color: #6ca96e;
            a {
                color: #fff;
            }
        }
    }
}
</style>
<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    }
}
</script>




