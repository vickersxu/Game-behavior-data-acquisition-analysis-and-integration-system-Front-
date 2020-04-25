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
        <br><br><br>
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
                dom: null,
                datass:[],
                v1:['2020-04-25', '2020-04-25'],
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
            }
        },
        created() {

            this.abc()

        },
        methods: {


            qqq(datass){

                const option = {
                    title: {
                        text: '关卡漏斗',
                        subtext: '2020.4.25'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    toolbox: {
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    legend: {
                        data: ['第一关','第二关','第三关','第四关','第五关']
                    },

                    series: [
                        {
                            name:'漏斗图',
                            type:'funnel',
                            left: '10%',
                            top: 60,
                            //x2: 80,
                            bottom: 60,
                            width: '80%',
                            // height: {totalHeight} - y - y2,
                            min: 0,
                            max: 100,
                            minSize: '0%',
                            maxSize: '100%',
                            sort: 'descending',
                            gap: 2,
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            labelLine: {
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                            itemStyle: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            emphasis: {
                                label: {
                                    fontSize: 20
                                }
                            },
                            data: this.datass
                        }
                    ]
                };


                this.$nextTick(() => {

                    this.dom = echarts.init(this.$refs.dom)
                    this.dom.setOption(option)
                    on(window, 'resize', this.resize)

                })

            },


            cx(){
                console.log("123123")
                this.datass=[
                    {value: 56.6, name: '第三关'},
                    {value: 33, name: '第四关'},
                    {value: 27.6, name: '第五关'},
                    {value: 80, name: '第二关'},
                    {value: 88.8, name: '第一关'}
                ]

            },

            abc(){
                console.log("123111111111123")
                this.datass=[
                    {value: 66.6, name: '第三关'},
                    {value: 40, name: '第四关'},
                    {value: 27.6, name: '第五关'},
                    {value: 80, name: '第二关'},
                    {value: 98.8, name: '第一关'}
                ]

            },




            resize () {
                this.dom.resize()
            }
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
        left:86%;
        top:10%;
        z-index: 999;
    }


    .picker22{
        position: absolute ;
        left:26%;
        top:10%;
        z-index: 999;
    }

    .picker11{
        position: absolute ;
        left:13%;
        top:10%;
        z-index: 999;
    }
</style>