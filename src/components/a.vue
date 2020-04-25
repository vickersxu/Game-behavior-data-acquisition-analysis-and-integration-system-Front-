<template>
    <div>
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
        <br><br>
        <Row style="background:#eee;padding:20px">

            <Card :bordered="false">
                <p slot="title">A游戏ABtest数据</p>
                <p>A组数据</p>
                <br>
                <Table :columns="columns9" :data="data1"></Table>
                <br>
                <p>B组数据</p>
                <br>
                <Table :columns="columns1" :data="data8"></Table>
            </Card>


        </Row>

    </div>
</template>

<script>
    export default {
        name: "a",
        data(){
            return{
                v1:['2020-04-23', '2020-04-25'],
                columns1: [
                    {
                        title: '新增用户数',
                        key: 'xz'
                    },
                    {
                        title: '游戏启动次数',
                        key: 'qd'
                    },
                    {
                        title: '游戏关卡次数',
                        key: 'gq'
                    },
                    {
                        title: '游戏付费收益',
                        key: 'iap'
                    },
                    {
                        title: '游戏收益数据',
                        key: 'rev'
                    },
                ],
                columns9: [
                    {
                        title: '新增用户数',
                        key: 'xz'
                    },
                    {
                        title: '游戏启动次数',
                        key: 'qd'
                    },
                    {
                        title: '游戏关卡次数',
                        key: 'gq'
                    },
                    {
                        title: '游戏付费收益',
                        key: 'iap'
                    },
                    {
                        title: '游戏收益数据',
                        key: 'rev'
                    },
                ],

                data1: [
                    {
                        xz:"1477",
                        qd:"4574",
                        gq: '8844',
                        iap:"47",
                        rev:"841",

                    },
                    {
                        xz: '1705',
                        qd: '4780',
                        gq: '7541',
                        iap:"55",
                        rev:"741",

                    },
                    {
                        xz:"2150",
                        qd:"4574",
                        gq: '8210',
                        iap:"80",
                        rev:"570",

                    },
                    {
                        xz:"1571",
                        qd:"4574",
                        gq: '8321',
                        iap:"67",
                        rev:"743",
                        cellClassName: {
                            xz: 'demo-table-info-cell-address',
                            gq:'demo-table-info-cell-age',
                            iap:'demo-table-info-cell-address',
                            qd:'demo-table-info-cell-name',
                            rev:'demo-table-info-cell-name',
                        }

                    }
                ],
                data8: [
                    {
                        xz:"1417",
                        qd:"4574",
                        gq: '8764',
                        iap:"51",
                        rev:"781",

                    },
                    {
                        xz: '1705',
                        qd: '4100',
                        gq: '7410',
                        iap:"89",
                        rev:"854",

                    },
                    {
                        xz:"1477",
                        qd:"4574",
                        gq: '9871',
                        iap:"32",
                        rev:"749",

                    },
                    {
                        xz:"1477",
                        qd:"4300",
                        gq: '8754',
                        iap:"56",
                        rev:"720",
                        cellClassName: {
                            xz: 'demo-table-info-cell-age',
                            iap: 'demo-table-info-cell-age',
                            qd:'demo-table-info-cell-name',
                            gq:'demo-table-info-cell-address',
                            rev:'demo-table-info-cell-name',
                        }

                    }],
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