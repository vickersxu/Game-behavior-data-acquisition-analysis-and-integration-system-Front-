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

            <div class="searchButton1">
                <Button type="primary" @click="cx">查询数据</Button>
                &nbsp;
                &nbsp;
                <Button :loading="exportLoading" @click="exportExcel" type="success" style="margin-left: 15px">导出Excel</Button>
            </div>
            <br>

            <Select class="picker11" placeholder="游戏A" v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>

            <row class="picker22">
                <i-col span="12">
                    <Date-picker :value='v1'  @on-change="time1" type="daterange" placement="right-start" placeholder="请选择日期范围" style="width: 200px"></Date-picker>
                </i-col>
            </row>

        </div>
        <br>
        <div>
            <RadioGroup type="button">

                <span @click="xz()"><Radio label="new">新增用户</Radio></span>
                <span @click="hy()"><Radio label="active">活跃用户</Radio></span>
                <span @click="qd()"><Radio label="gamecount">启动次数</Radio></span>
                <span @click="sc()"><Radio label="playtime">使用时长</Radio></span>

            </RadioGroup>
        </div>
        <br><br>
        <row>
            <Card shadow>
                <div ref="dom" style="height: 400px;" ></div>
            </Card>
        </row>
        <br>

<!--        <Card title="导出EXCEL">-->
<!--            <Row>-->
<!--                <Button icon="md-download" :loading="exportLoading" @click="exportExcel">导出文件</Button>-->
<!--            </Row>-->
<!--        </Card>-->

    </div>
</template>

<script>
    import excel from "../libs/excel";
    import InforCard from '../components/info-card'
    import CountTo from '../components/count-to'
    import echarts from 'echarts'
    import { on, off } from '../libs/tools.js'
    import {getRealtime,getGameInfo} from "../networking/real-time";
    export default {
        name: 'serviceRequests',
        components:{
            InforCard,
            CountTo,
        },

        data () {
            return {
                v1:['2020-04-25', '2020-04-25'],
                datass:[],
                datasss:[],
                dom: null,
                inforCardData: [
                    { title: '新增用户(人)', icon: 'md-person-add', count:4778, color: '#2d8cf0' },
                    { title: '活跃用户(人)', icon: 'md-person', count: 5477, color: '#19be6b' },
                    { title: '启动次数(次)', icon: 'md-locate', count: 14411, color: '#ff9900' },
                    { title: '使用时长(秒)', icon: 'md-share', count: 675, color: '#ed3f14' },
                    { title: '新增互动', icon: 'md-chatbubbles', count: 754, color: '#E46CBB' },
                    { title: '新增回复', icon: 'md-map', count: 30, color: '#9A66E4' }
                ],
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
                exportLoading: false,
                tableTitle: [
                    {
                        title: '0',
                        key: 'category1'
                    },
                    {
                        title: '1',
                        key: 'category2'
                    },
                    {
                        title: '2',
                        key: 'category3'
                    },
                    {
                        title: '3',
                        key: 'category4'
                    },
                    {
                        title: '4',
                        key: 'category5'
                    },
                    {
                        title: '5',
                        key: 'category6'
                    }, {
                        title: '7',
                        key: 'category7'
                    },
                    {
                        title: '8',
                        key: 'category8'
                    },
                    {
                        title: '9',
                        key: 'category9'
                    }, {
                        title: '10',
                        key: 'category10'
                    },
                    {
                        title: '11',
                        key: 'category11'
                    },
                    {
                        title: '12',
                        key: 'category12'
                    }, {
                        title: '13',
                        key: 'category13'
                    },
                    {
                        title: '14',
                        key: 'category14'
                    },
                    {
                        title: '15',
                        key: 'category15'
                    }, {
                        title: '16',
                        key: 'category16'
                    },
                    {
                        title: '17',
                        key: 'category17'
                    },
                    {
                        title: '18',
                        key: 'category18'
                    }, {
                        title: '19',
                        key: 'category19'
                    },
                    {
                        title: '20',
                        key: 'category20'
                    },
                    {
                        title: '21',
                        key: 'category21'
                    }, {
                        title: '22',
                        key: 'category22'
                    },
                    {
                        title: '23',
                        key: 'category23'
                    },
                    {
                        title: '24',
                        key: 'category24'
                    }
                ],
                tableData: [
                    {
                        category1: 111,
                        category2: 654,
                        category3: 222,
                        category4: 246,
                        category5: 661,
                        category6: 421,
                        category7: 333,
                        category8: 217,
                        category9: 522,
                        category10: 124,
                        category11: 333,
                        category12: 222,
                        category13: 521,
                        category14: 531,
                        category15: 452,
                        category16: 351,
                        category17: 230,
                        category18: 553,
                        category19: 312,
                        category20: 278,
                        category21: 382,
                        category22: 510,
                        category23: 230,
                        category24: 311,
                    },
                    {
                        category1: 379,
                        category2: 268,
                        category3: 354,
                        category4: 269,
                        category5: 310,
                        category6: 478,
                        category7: 358,
                        category8: 379,
                        category9: 268,
                        category10: 354,
                        category11: 269,
                        category12: 310,
                        category13: 478,
                        category14: 358,
                        category15: 379,
                        category16: 268,
                        category17: 354,
                        category18: 269,
                        category19: 310,
                        category20: 478,
                        category21: 358,
                        category22: 478,
                        category23: 358,
                        category24: 478,
                    },

                ]
            }

        },
        created() {

            this.abc()

        },
        methods: {
            exportExcel () {
                if (this.tableData.length) {
                    this.exportLoading = true
                    const params = {
                        title: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                        key: ['category1', 'category2', 'category3','category4', 'category5', 'category6','category7', 'category8', 'category9','category10', 'category11', 'category12','category13', 'category14', 'category15','category16', 'category17', 'category18','category19', 'category20', 'category21','category22', 'category23', 'category24'],
                        data: this.tableData,
                        autoWidth: true,
                        filename: '2020-04-25游戏B新增用户数据'
                    }
                    excel.export_array_to_excel(params)
                    this.exportLoading = false
                } else {
                    this.$Message.info('表格数据不能为空！')
                }
            },

            qqq(datass){
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
                            data: ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13','14', '15', '16', '17', '18', '19', '20','21', '22', '23', '24']
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
                            data: this.datass
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
                            data: this.datasss
                        }
                    ]
                }

                this.$nextTick(() => {
                    console.log("diaoyong ")
                    this.dom = echarts.init(this.$refs.dom)
                    this.dom.setOption(option,true)
                    on(window, 'resize', this.resize)
                })
            },

            cx(){


                let tmep1=[];
                let tmep2=[];
                for(let i=0;i<25;i++){

                    tmep1[i]=this.datass[i]+Math.floor(Math.random()*100);
                    tmep2[i]=this.datasss[i]+Math.floor(Math.random()*100);
                }
                this.datass=tmep1;
                this.datasss=tmep2;
            },

            abc(){

                this.datass=[111, 654, 222, 246, 661, 421, 333,217, 522, 124, 333, 222, 521, 531,452, 351, 230, 553, 312, 278, 382,510, 551, 230,311];
                this.datasss=[379, 268, 354, 269, 310, 478, 358,379, 268, 354, 269, 310, 478, 358,379, 268, 354, 269, 310, 478, 358,310, 478, 358,478];
            },
            xz(){
                console.log("123");
                // console.log(Math.floor(Math.random()*100));
                this.datass=[111, 654, 222, 246, 661, 421, 333,217, 522, 124, 333, 222, 521, 531,452, 351, 230, 553, 312, 278, 382,510, 551, 230,311];
                this.datasss=[379, 268, 354, 269, 310, 478, 358,379, 268, 354, 269, 310, 478, 358,379, 268, 354, 269, 310, 478, 358,310, 478, 358,478];

                },
            hy(){


                let tmep1=[];
                let tmep2=[];
                for(let i=0;i<25;i++){

                   tmep1[i]=this.datass[i]+Math.floor(Math.random()*100);
                   tmep2[i]=this.datasss[i]+Math.floor(Math.random()*100);
                }
                this.datass=tmep1;
                this.datasss=tmep2;
                //
                // console.log(this.datass)
                // this.datass=[11221, 654, 222, 246, 661, 421, 333,217, 522, 124, 333, 222, 521, 531,452, 351, 230, 553, 312, 278, 382,510, 551, 230,311];
                // this.datasss=[37229, 268, 354, 269, 310, 478, 358,379, 268, 354, 269, 310, 478, 358,379, 268, 354, 269, 310, 478, 358,310, 478, 358,478];
                // console.log(this.datass)

            },
            qd(){

                console.log("321");
                let tmep1=[];
                let tmep2=[];
                for(let i=0;i<25;i++){

                    tmep1[i]=(this.datass[i]+Math.floor(Math.random()*100))*3;
                    tmep2[i]=(this.datasss[i]+Math.floor(Math.random()*100))*3;
                }
                this.datass=tmep1;
                this.datasss=tmep2;

            },
            sc(){

                console.log("321");
                let tmep1=[];
                let tmep2=[];
                for(let i=0;i<25;i++){

                    tmep1[i]=Math.floor(Math.random()*(900-500+1))+500;
                    tmep2[i]=Math.floor(Math.random()*(900-500+1))+500;
                }
                this.datass=tmep1;
                this.datasss=tmep2;

            },

            getRealtime(){
                getRealtime().then(res =>{
                    // console.log(res)
                    let sum1=0;
                    let sum2=0;
                    let sum3=0;
                    let sum4=0;

                    for(let i of res[4]){
                        this.cityList.push(
                            {
                                value: i['app_id'],
                                label: i['app_name'],
                            }
                        )
                    }
                    for(let i of res) {
                        console.log(i);
                        for(let ii of i){
                            if(ii['new_num']){
                                console.log(ii)
                                this.hourdatas.push(ii['new_num'])
                                sum1=sum1+ii['new_num']
                            }
                            if(ii['active_num']){
                                sum2=sum2+ii['active_num']
                            }
                            if(ii['start_count']){
                                sum3=sum3+ii['start_count']
                            }
                            if(ii['avg_playtime']){
                                sum4=sum4+ii['avg_playtime']
                            }

                        }
                    }
                    this.inforCardData[0].count=sum1;
                    this.inforCardData[1].count=sum2;
                    this.inforCardData[2].count=sum3;
                    this.inforCardData[3].count=sum4;
                    // console.log(this.hourdatas)
                    console.log(Object.values(this.hourdatas))
                })
            },

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
            this.qqq(this.datass)
        },
        beforeDestroy () {
            off(window, 'resize', this.resize)
        },

        watch: {
            //观察option的变化
            datasss: {

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
            },

            datass: {

                handler(newVal, oldVal) {
                    console.log("1211111")
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


<style>

    .searchButton1{
        position: absolute ;
        left:85%;
        top:28%;
        z-index: 999;
    }


    .picker22{
        position: absolute ;
        left:45%;
        top:28%;
        z-index: 999;
    }

    .picker11{
        position: absolute ;
        left:33%;
        top:28%;
        z-index: 999;
    }

</style>

<style lang="less">
    .count-style{
        font-size: 50px;
    }
</style>

