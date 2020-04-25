<template>
    <div>
        <div class="searchButton1">
            <Button type="primary" @click="cx" >查询数据</Button>
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
        <row>
            <Card shadow>
                <div ref="dom" style="height: 700px;" ></div>
            </Card>
        </row>

    </div>

</template>

<script>

    import echarts from 'echarts'
    import { on, off } from '../libs/tools.js'
    export default {
        name: 'serviceRequests',
        components:{

        },
        data () {
            return {
                v1:['2020-04-19', '2020-04-25'],
                datass:[],
                dom: null,
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

            abc(){

                this.datass=[
                    ['product', '19', '20', '21', '22', '23', '24','25'],
                    ['渠道A', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7,43.2],
                    ['渠道B', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1,56.1],
                    ['渠道C', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5,77.8],
                    ['渠道D', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1,40.5],
                ]

            },

            qqq(datass){
                const option = {
                    legend: {},
                    tooltip: {
                        trigger: 'axis',
                        showContent: false
                    },
                    dataset: {
                        source: this.datass
                    },
                    xAxis: {type: 'category'},
                    yAxis: {gridIndex: 0},
                    grid: {top: '55%'},
                    series: [
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                        {
                            type: 'pie',
                            id: 'pie',
                            radius: '30%',
                            center: ['50%', '25%'],
                            label: {
                                formatter: '{b}: {@2012} ({d}%)'
                            },
                            encode: {
                                itemName: 'product',
                                value: '2012',
                                tooltip: '2012'
                            }
                        }
                    ]
                };


                this.$nextTick(() => {

                    this.dom = echarts.init(this.$refs.dom)

                    this.dom.on('updateAxisPointer', function (event) {
                        var xAxisInfo = event.axesInfo[0];
                        if (xAxisInfo) {
                            var dimension = xAxisInfo.value + 1;
                            this.setOption({
                                series: {
                                    id: 'pie',
                                    label: {
                                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                                    },
                                    encode: {
                                        value: dimension,
                                        tooltip: dimension
                                    }
                                }
                            });
                        }
                    });

                    this.dom.setOption(option)
                    on(window, 'resize', this.resize)

                })
            },

            cx(){

                this.datass=[
                    ['product', '19', '20', '21', '22', '23', '24','25'],
                    ['渠道A', 77.1, 30.4, 22.1, 51.3, 61.8, 20.7,43.2],
                    ['渠道B', 25.5, 66.1, 85.7, 83.1, 73.4, 55.1,56.1],
                    ['渠道C', 24.1, 47.2, 79.5, 48.4, 55.2, 82.5,15.8],
                    ['渠道D', 24.2, 67.1, 69.2, 72.4, 72.9, 39.1,40.5],
                ]


            },

            resize () {
                this.dom.resize()
            }
        },
        created() {

            this.abc()

        },
        mounted () {

        this.qqq(this.datass)

        },
        beforeDestroy () {
            off(window, 'resize', this.resize)
        },

        watch: {
            //观察option的变化
            datass: {

                handler(newVal, oldVal) {
                    if (this.dom) {
                        if (newVal) {
                            this.qqq(newVal);
                        } else {
                            // this.dom.setOption(oldVal);
                        }
                    } else {
                        // this.dominit();
                    }
                },
                deep: true //对象内部属性的监听，关键。
            }
        }

    }
</script>



<style scoped>
    .searchButton1{
        position: absolute ;
        left:78%;
        top:45%;
        z-index: 999;
    }


    .picker22{
        position: absolute ;
        left:31%;
        top:45%;
        z-index: 999;
    }

    .picker11{
        position: absolute ;
        left:20%;
        top:45%;
        z-index: 999;
    }
</style>