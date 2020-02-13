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
        <div>
            <RadioGroup type="button">
                <Radio label="new">新增用户</Radio>
                <Radio label="active">活跃用户</Radio>
                <Radio label="gamecount">启动次数</Radio>
                <Radio label="playtime">使用时长</Radio>
            </RadioGroup>
        </div>
        <br><br>
        <row>
        <Card shadow>
            <div ref="dom" style="height: 400px;" ></div>
        </Card>
        </row>
        <br>
        <p>Custom row styles:</p>
        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
        <p>Custom column styles:</p>
        <Table :columns="columns9" :data="data1"></Table>
        <p>Custom arbitrary cell styles:</p>
        <Table :columns="columns1" :data="data8"></Table>

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
                    { title: '新增用户(人)', icon: 'md-person-add', count: 998, color: '#2d8cf0' },
                    { title: '活跃用户(人)', icon: 'md-person', count: 4998, color: '#19be6b' },
                    { title: '启动次数(次)', icon: 'md-locate', count: 14200, color: '#ff9900' },
                    { title: '使用时长(秒)', icon: 'md-share', count: 657, color: '#ed3f14' },
                    { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
                    { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
                ],
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
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns9: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data8: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        cellClassName: {
                            age: 'demo-table-info-cell-age',
                            address: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        cellClassName: {
                            name: 'demo-table-info-cell-name'
                        }
                    }]
               }

        },
        methods: {
            resize () {
                this.dom.resize()
            },
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
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


<style>

    .searchButton{
        position: absolute ;
        left:85%;
        top:20%;
        z-index: 999;
    }


    .picker2{
        position: absolute ;
        left:45%;
        top:20.5%;
        z-index: 999;
    }

    .picker1{
        position: absolute ;
        left:33%;
        top:20.5%;
        z-index: 999;
    }
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }

</style>

<style lang="less">
    .count-style{
        font-size: 50px;
    }
</style>