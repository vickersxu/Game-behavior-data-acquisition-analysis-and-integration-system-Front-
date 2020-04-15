<template>
    <div>
        <div style="padding: 12px 32px; border-bottom: 1px solid rgb(150, 205, 205);">

            <Row :gutter="20" style="margin-top: 10px;">
                <i-col :md="24" :lg="8" style="margin-bottom: 20px;">
                    <Card shadow>
                        <chart-pie style="height: 300px;" :value="pieData" text="用户访问来源"></chart-pie>
                    </Card>
                </i-col>
                <i-col :md="24" :lg="16" style="margin-bottom: 20px;">
                    <Card shadow>
                        <chart-bar style="height: 300px;" :value="barData" text="用户留存情况"/>
                    </Card>
                </i-col>
            </Row>

            <div class="searchButton">
                <Button type="primary" >查询数据</Button>
                &nbsp;
                &nbsp;
                <Button type="success" style="margin-left: 15px">导出Excel</Button>
            </div>
            <br>

            <Select class="picker1" placeholder="请选择游戏" v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>

            <row class="picker2">
                <i-col span="12">
                    <Date-picker type="daterange" placement="right-start" placeholder="请选择日期范围" style="width: 200px"></Date-picker>
                </i-col>
            </row>

        </div>
        <br>

        <br><br>
        <row>
            <Card shadow>
                <div ref="dom" style="height: 400px;" ></div>
            </Card>
            <Card shadow>
                <div ref="dom2" style="height: 400px;" ></div>
            </Card>
        </row>

    </div>
</template>

<script>
    import InforCard from '../components/info-card'
    import CountTo from '../components/count-to'
    import { ChartPie, ChartBar } from '../components/charts'
    import echarts from 'echarts'
    import { on, off } from '../libs/tools.js'
    export default {
        name: 'serviceRequests',
        components:{
            InforCard,
            CountTo,
            ChartPie,
            ChartBar
        },
        data () {
            return {
                dom: null,
                inforCardData: [
                    { title: '新增用户(人)', icon: 'md-person-add', count: 998, color: '#2d8cf0' },
                    { title: '活跃用户(人)', icon: 'md-person', count: 4998, color: '#19be6b' },
                    { title: '启动次数(次)', icon: 'md-locate', count: 14200, color: '#ff9900' },
                    { title: '使用时长(秒)', icon: 'md-share', count: 657, color: '#ed3f14' },
                    { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
                    { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
                ],
                pieData: [
                    { value: 335, name: '美国' },
                    { value: 310, name: '英国' },
                    { value: 234, name: '日本' },
                    { value: 135, name: '韩国' },
                    { value: 1548, name: '中国' }
                ],
                barData: {
                    Mon: 13253,
                    Tue: 34235,
                    Wed: 26321,
                    Thu: 12340,
                    Fri: 24643,
                    Sat: 1322,
                    Sun: 1324
                },
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    }

                ],
                model1: '',
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
                        name: '同比数据',
                        type: 'line',
                        // stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'bottom',

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#FF4040',

                            }
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },

                    {
                        name: '当前数据',
                        type: 'line',
                        // stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#1E90FF'
                            }
                        },
                        data: [379, 268, 354, 269, 310, 478, 358]
                    }
                ]
            };
            const option2 = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '邮件营销',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [820, 832, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            this.$nextTick(() => {
                this.dom = echarts.init(this.$refs.dom)
                this.dom2 = echarts.init(this.$refs.dom2)
                this.dom.setOption(option)
                this.dom2.setOption(option2)
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
        left:85%;
        top:8%;
        z-index: 999;
    }


    .picker2{
        position: absolute ;
        left:26%;
        top:8%;
        z-index: 999;
    }

    .picker1{
        position: absolute ;
        left:15%;
        top:8%;
        z-index: 999;
    }

</style>

<style lang="less">
    .count-style{
        font-size: 50px;
    }
</style>