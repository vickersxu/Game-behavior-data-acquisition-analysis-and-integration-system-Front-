<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{

        width: 100px;
        height: 30px;
        background: url("https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png");
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1" @click.native="jieshao">
                            <Icon type="ios-navigate"></Icon>
                            系统介绍
                        </MenuItem>
                        <MenuItem name="2" @click.native="realtimeClick">
                            <Icon type="ios-analytics"></Icon>
                            数据分析
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-keypad"></Icon>
                            注销登录
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#515a6e'}">
                    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                概况
                            </template>
                            <MenuItem @click.native="realtimeClick" name="1-1" >实时统计</MenuItem>
                            <MenuItem @click.native="overallClick" name="1-2" >整体趋势</MenuItem>

<!--                            <MenuItem name="1-3">Option 3</MenuItem>-->
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                用户分析
                            </template>
                            <MenuItem @click.native="newUserClick" name="2-1" >新增用户</MenuItem>
                            <MenuItem @click.native="activeUserClick" name="2-2" >活跃用户</MenuItem>

                        </Submenu>

                        <Submenu name="5">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                利润报表
                            </template>
                            <MenuItem @click.native="incomeClick" name="5-1" >收入</MenuItem>
                            <MenuItem @click.native="costClick" name="5-2" >成本</MenuItem>
                            <MenuItem @click.native="profitClick" name="5-3" >净利润</MenuItem>
                        </Submenu>

                        <div @click="gamebehaviorClick">

                            <Submenu name="3" >
                            <template slot="title" >
                                <Icon type="ios-analytics" ></Icon>
                                游戏行为
                            </template>

<!--                                    <MenuItem name="3-1">游戏启动数据</MenuItem>-->
<!--                                    <MenuItem name="3-2">游戏关卡数据</MenuItem>-->
<!--                                    <MenuItem name="3-3">游戏活动1数据</MenuItem>-->
<!--                                    <MenuItem name="3-4">游戏活动2数据</MenuItem>-->

                                <router-view is="gameBehavior"/>
                        </Submenu>

                        </div>

                        <div @click="ABtestClick" >

                            <Submenu name="4" >
                            <template slot="title">
                                <Icon type="ios-analytics" ></Icon>
                                A/B test
                            </template>
                                <!--                            <MenuItem name="3-1">group-A</MenuItem>-->
                                <!--                            <MenuItem name="3-2">group-B</MenuItem>-->
                                <!--                            <MenuItem name="3-3">group-C</MenuItem>-->
                                <!--                            <MenuItem name="3-3">group-D</MenuItem>-->
                                <router-view is="ABtest"/>
                        </Submenu>

                        </div>

                        <Submenu name="6">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Hive终端
                            </template>
                            <MenuItem @click.native="hive" name="6-1" >查询</MenuItem>
<!--                            <MenuItem @click.native="costClick" name="5-2" >成本</MenuItem>-->
<!--                            <MenuItem @click.native="profitClick" name="5-3" >净利润</MenuItem>-->
                        </Submenu>



                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
<!--                    <Breadcrumb :style="{margin: '24px 0'}">-->
<!--                        <BreadcrumbItem>Home</BreadcrumbItem>-->
<!--                        <BreadcrumbItem>Components</BreadcrumbItem>-->
<!--                        <BreadcrumbItem>Layout</BreadcrumbItem>-->
<!--                    </Breadcrumb>-->
                    <Content :style="{padding: '24px', minHeight: '900px', background: '#f5f7f9'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import gameBehavior from '../components/gameBehavior'
    import ABtest from '../components/ABtest'

    export default {
        name:'layout',
        components:{
            gameBehavior,
            ABtest,
        },
        methods:{
            realtimeClick(){
                this.$router.push('/realtime')
                console.log('realtimeclick')
            },
            overallClick(){
                this.$router.push('/overall')
                console.log('overallclick')
            },
            newUserClick(){
                this.$router.push('/newUser')
                console.log('newUserclick')
            },
            activeUserClick(){
                this.$router.push('/activeUser')
                console.log('activeUserclick')
            },
            gamebehaviorClick(){
                // this.$router.push('/gameBehavior')
                console.log('gamebehaviorClick')
            },
            ABtestClick(){
                // this.$router.push('/ABtest')
                console.log('ABtestClick')
            },
            incomeClick(){
                this.$router.push('/incomeClick')
                console.log('incomeClick')
            }
            ,
            costClick(){
                this.$router.push('/costClick')
                console.log('costClick')
            }
            ,
            profitClick(){
                this.$router.push('/profitClick')
                console.log('profitClick')
            },

            hive(){
                this.$router.push('/hive')
                console.log('hive')
            }
            ,
            jieshao(){
                this.$router.push('/jieshao')
                console.log('jieshao')
            }

        }
    }
</script>
