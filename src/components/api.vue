<template>
<h2>{{test}}</h2>
</template>

<script>
    // import {getRankData} from '../networking/rank'
    import {request} from "../networking/request";
    export default {
        name: "api",
        data(){
            return{
                test:''
            }
        },
        created() {
            request({
                url: '/dev/realtime'
            }).then(res => {
                this.test=res
                console.log(res);
            }).catch(err => {
                // console.log(err);
            })
        }
    }
</script>

<style scoped>

</style>