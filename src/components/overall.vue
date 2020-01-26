<template>
    <div>
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
            <Button type="success">导出Excel</Button>
        </div>
        <br>

<!--        <div class="clearfix">-->


<!--            <div style="float:left;">-->
<!--                <Card style="width:200px">-->
<!--                    <p slot="title">-->
<!--                        <Icon type="ios-film-outline"></Icon>-->
<!--                        新增用户(7日平均)-->
<!--                    </p>-->
<!--                    <a href="#" slot="extra" @click.prevent="changeLimit">-->
<!--                        <Icon type="ios-loop-strong"></Icon>-->
<!--                        Change-->
<!--                    </a>-->
<!--                    <ul>-->
<!--                        <li v-for="item in randomMovieList">-->
<!--                            <a :href="item.url" target="_blank">{{ item.name }}</a>-->
<!--                            <span>-->
<!--                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>-->
<!--                    {{ item.rate }}-->
<!--                </span>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </Card>-->


<!--            </div>-->
<!--            <div style="float:left;margin-left:50px;">-->

<!--                <Card style="width:200px">-->
<!--                    <p slot="title">-->
<!--                        <Icon type="ios-film-outline"></Icon>-->
<!--                        活跃用户(7日平均)-->
<!--                    </p>-->
<!--                    <a href="#" slot="extra" @click.prevent="changeLimit">-->
<!--                        <Icon type="ios-loop-strong"></Icon>-->
<!--                        Change-->
<!--                    </a>-->
<!--                    <ul>-->
<!--                        <li v-for="item in randomMovieList">-->
<!--                            <a :href="item.url" target="_blank">{{ item.name }}</a>-->
<!--                            <span>-->
<!--                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>-->
<!--                    {{ item.rate }}-->
<!--                </span>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </Card>-->


<!--            </div>-->
<!--            <div style="float:left;margin-left:50px;">-->

<!--                <Card style="width:200px">-->
<!--                    <p slot="title">-->
<!--                        <Icon type="ios-film-outline"></Icon>-->
<!--                        启动次数(7日平均)-->
<!--                    </p>-->
<!--                    <a href="#" slot="extra" @click.prevent="changeLimit">-->
<!--                        <Icon type="ios-loop-strong"></Icon>-->
<!--                        Change-->
<!--                    </a>-->
<!--                    <ul>-->
<!--                        <li v-for="item in randomMovieList">-->
<!--                            <a :href="item.url" target="_blank">{{ item.name }}</a>-->
<!--                            <span>-->
<!--                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>-->
<!--                    {{ item.rate }}-->
<!--                </span>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </Card>-->

<!--            </div>-->
<!--            <div style="float:left;margin-left:50px;">-->

<!--                <Card style="width:200px">-->
<!--                    <p slot="title">-->
<!--                        <Icon type="ios-film-outline"></Icon>-->
<!--                        使用时长(7日平均)-->
<!--                    </p>-->
<!--                    <a href="#" slot="extra" @click.prevent="changeLimit">-->
<!--                        <Icon type="ios-loop-strong"></Icon>-->
<!--                        Change-->
<!--                    </a>-->
<!--                    <ul>-->
<!--                        <li v-for="item in randomMovieList">-->
<!--                            <a :href="item.url" target="_blank">{{ item.name }}</a>-->
<!--                            <span>-->
<!--                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>-->
<!--                    {{ item.rate }}-->
<!--                </span>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                </Card>-->

<!--            </div>-->

<!--        </div>-->

        <row>
            <i-col span="12">
                <Date-picker type="daterange" placement="right-start" placeholder="请选择日期范围" style="width: 200px"></Date-picker>
            </i-col>
        </row>

    </div>
</template>

<script>

    import InforCard from '../components/info-card'

    export default {
        name: "realtime",
        components:{
            InforCard,
        },
        data () {
            return {
                movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: "Schindler's List",
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: [],
                inforCardData: [
                    { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
                    { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
                    { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
                    { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
                    { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
                    { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
                ],
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>


<style scoped>

    .searchButton{
        position: absolute ;
        left:85%;
        top:15%;
    }
    .new7{

    }
    .active7{

    }
    .all{

    }
    .start{

    }

</style>