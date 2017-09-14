<template>
    <div>
        <div class="topbox">
            <div class="topmain">
                <ul class="right clear">
                    <li>
                        <a>[ 登录 ]</a> ,
                        <a>[ 注册有好礼 ]</a>
                    </li>
                    <li></li>
                    <li>仅送上海</li>
                    <li>我厨APP</li>
                    <li>我厨微信</li>
                    <li>4008-527-957</li>
                </ul>
            </div>
            <div class="topSearch">
                <div class="main clear">
                    <div class="logo left"><img src="./../assets/wlogo.png" alt=""></div>
                    <div class="right">
                        <el-input placeholder="请输入要找的商品.." icon="search" v-model="input2">
                        </el-input>
                    </div>
                </div>
            </div>
            <div class="topnav">
                <div class="main clear">
                    <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" placeholder="全部商品">
                    </el-cascader>
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
                    <div class="shoppingCar">购物车</div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="less">
.topbox {
    width: 100%;
    height: 170px;
    background: #f8f8f8;
    color: #666;
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
                font-size: 14px;

                a {
                    cursor: pointer;
                    color: #666;
                }
                &:last-child {
                    border: none;
                    margin-right: 0;
                    padding-right: 0;
                }
            }
        }
    }
    .topSearch {
        width: 100%;
        background: #fff;

        .main {
            width: 1280px;
            height: 80px;
            margin: 0 auto;
            .logo {
                img {
                    height: 75px;
                }
            }
            .right {
                margin-right: 20px;
                .el-input {
                    margin-top: 20px;
                    input {
                        width: 400px;
                        height: 40px;
                        border-radius: 20px;
                    }
                }
            }
        }
    }
    .topnav {
        width: 100%;
        line-height: 60px;
        height: 60px;
        background-color: #6ca96e;
        .main {
            width: 1280px;
            margin: 0 auto;
            span {
                height: 60px;
                width: 200px;
                float: left;
                margin: 0 20px;
            }
            ul {
                float: left;
                background-color: #6ca96e;
                a {
                    color: #fff;
                    display: block;
                    width: 100%;
                    height: 60px;
                }
            }
            .shoppingCar {
                float: right;
                margin-right: 20px;
                color:#fff;
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
            activeIndex2: '1',
            input2: '',
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',

                }, {
                    value: 'daohang',
                    label: '导航',

                }]
            }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',

                }, {
                    value: 'form',
                    label: 'Form',

                }, {
                    value: 'data',
                    label: 'Data',

                }, {
                    value: 'notice',
                    label: 'Notice',

                }, {
                    value: 'navigation',
                    label: 'Navigation',

                }, {
                    value: 'others',
                    label: 'Others',
                }]
            }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],
            selectedOptions: [],
            selectedOptions2: []
        };
    }
}
</script>




