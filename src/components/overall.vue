<template>
    <div>
        <div style="padding: 12px 32px; border-bottom: 1px solid rgb(150, 205, 205);">
            <Row :gutter="20">
                <i-col :xs="12" :md="8" :lg="4" v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height: 120px;padding-bottom: 10px;">
                    <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36">
                        <count-to :end="infor.count" count-class="count-style"/>
                        <p>{{ infor.title }}</p>
                    </infor-card>
                </i-col>
            </Row>

            <div class="searchButton">
                <!--            <Button type="primary" >查询数据</Button>-->
                <!--            &nbsp;-->
                <!--            &nbsp;-->
                <Button type="success">导出Excel</Button>
            </div>
            <br>

            <row>
                <i-col span="12">
                    <Date-picker type="daterange" placement="right-start" placeholder="请选择日期范围" style="width: 200px"></Date-picker>
                </i-col>
            </row>
    </div>
        <br>
        <div>
            <RadioGroup type="button">
                <Radio label="new">新增用户</Radio>
                <Radio label="active">活跃用户</Radio>
                <Radio label="gamecount">启动次数</Radio>
                <Radio label="playtime">使用时长</Radio>
            </RadioGroup>
        </div>
        <br>
        <row>
        <Card shadow>
            <div ref="dom" style="height: 400px;" ></div>
<!--            <example style="height: 310px;"/>-->
        </Card>
        </row>

    </div>
</template>

<script>

    import InforCard from '../components/info-card'
    import CountTo from '../components/count-to'
    import echarts from 'echarts'
    import { on, off } from '../libs/tools.js'
    export default {
        name: 'serviceRequests',
        components:{
            InforCard,
            CountTo,
        },
        data () {
            return {
                dom: null,
                inforCardData: [
                    { title: '新增用户', icon: 'md-person-add', count: 998, color: '#2d8cf0' },
                    { title: '活跃用户', icon: 'md-person', count: 4998, color: '#19be6b' },
                    { title: '启动次数', icon: 'md-locate', count: 142, color: '#ff9900' },
                    { title: '使用时长', icon: 'md-share', count: 657, color: '#ed3f14' },
                    { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
                    { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
                ],
            }
        },
        methods: {
            resize () {
                this.dom.resize()
            }
        },
        mounted () {

            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    top: '3%',
                    left: '1.2%',
                    right: '1%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '运营商/网络服务',
                        type: 'line',
                        stack: '总量',
                        areaStyle: { normal: {
                                color: '#2d8cf0'
                            } },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '银行/证券',
                        type: 'line',
                        stack: '总量',
                        areaStyle: { normal: {
                                color: '#10A6FF'
                            } },
                        data: [257, 358, 278, 234, 290, 330, 310]
                    },
                    {
                        name: '游戏/视频',
                        type: 'line',
                        stack: '总量',
                        areaStyle: { normal: {
                                color: '#0C17A6'
                            } },
                        data: [379, 268, 354, 269, 310, 478, 358]
                    },
                    {
                        name: '餐饮/外卖',
                        type: 'line',
                        stack: '总量',
                        areaStyle: { normal: {
                                color: '#4608A6'
                            } },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '快递/电商',
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: { normal: {
                                color: '#398DBF'
                            } },
                        data: [820, 645, 546, 745, 872, 624, 258]
                    }
                ]
            }

            this.$nextTick(() => {
                this.dom = echarts.init(this.$refs.dom)
                this.dom.setOption(option)
                on(window, 'resize', this.resize)
            })

        },
        beforeDestroy () {
            off(window, 'resize', this.resize)
        }
    }
</script>


<style scoped>

    .searchButton{
        position: absolute ;
        left:90%;
        top:29%;
        z-index: 999;
    }


</style>

<style lang="less">
    .count-style{
        font-size: 50px;
    }
</style>