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
        <br><br><br>

        <Row style="background:#eee;padding:20px">
            <Table border :columns="columns12" :data="data6">
                <template slot-scope="{ row }" slot="name">
                    <strong>{{ row.name }}</strong>
                </template>
                <template slot-scope="{ row, index }" slot="action">
                    <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">View</Button>
                    <Button type="error" size="small" @click="remove(index)">CMP</Button>
                </template>
            </Table>
        </Row>


    </div>

</template>

<script>
    export default {
        data () {
            return {
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

                columns12: [
                    {
                        title: 'Sort',
                        slot: 'name'
                    },
                    {
                        title: 'Type',
                        key: 'Type'
                    },
                    {
                        title: 'Position',
                        key: 'Position'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                    {
                        name: 'J123wn',
                        Type: 18,
                        Position: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        Type: 24,
                        Position: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        Type: 30,
                        Position: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        Type: 26,
                        Position: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {

            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].Sort}<br>Age：${this.data6[index].Type}<br>Address：${this.data6[index].Position}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
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