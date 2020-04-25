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
                        <chart-bar style="height: 300px;" :value="barData" text="上周新增数据回顾"/>
                    </Card>
                </i-col>
            </Row>

            <div class="searchButton1">
                <Button type="primary" >查询数据</Button>
                &nbsp;
                &nbsp;
                <Button type="success" style="margin-left: 15px">导出Excel</Button>
            </div>
            <br>

            <Select class="picker11" placeholder="游戏A" v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>

            <row class="picker22">
                <i-col span="12">
                    <Date-picker :value='v1' type="daterange" placement="right-start" placeholder="请选择日期范围" style="width: 200px"></Date-picker>
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
                v1:['2020-04-19', '2020-04-25'],
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
                    { value: 600, name: '美国' },
                    { value: 255, name: '英国' },
                    { value: 400, name: '日本' },
                    { value: 177, name: '韩国' },
                    { value: 1000, name: '中国' }
                ],
                barData: {
                    周一: 4222,
                    周二: 3721,
                    周三: 5611,
                    周四: 4351,
                    周五: 4643,
                    周六: 6664,
                    周日: 6950
                },
                cityList: [
                    {
                        value: '游戏A',
                        label: '游戏A'
                    },
                    {
                        value: '游戏B',
                        label: '游戏B'
                    },
                    {
                        value: '游戏C',
                        label: '游戏C'
                    }],
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
                        data: ['19', '20', '21', '22', '23', '24', '25']
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
                    data: ['D1', 'D2', 'D3', 'D4', 'D5']
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
                    data: ['上周一', '上周二', '上周三', '上周四', '上周五', '上周六', '上周日']
                },
                series: [
                    {
                        name: 'D1',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [320, 302, 301, 334, 390, 330, 320]
                    },
                    {
                        name: 'D2',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'D3',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'D4',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'insideRight'
                        },
                        data: [150, 212, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'D5',
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

    .searchButton1{
        position: absolute ;
        left:85%;
        top:34.5%;
        z-index: 999;
    }


    .picker22{
        position: absolute ;
        left:26%;
        top:34.5%;
        z-index: 999;
    }

    .picker11{
        position: absolute ;
        left:15%;
        top:34.5%;
        z-index: 999;
    }

</style>

<style lang="less">
    .count-style{
        font-size: 50px;
    }
</style>