<template>
    <div>
<!--        <MenuItem @click.native="qidong" name="3-1">游戏启动数据</MenuItem>-->
        <MenuItem @click.native="guanqia" name="3-2">游戏关卡数据</MenuItem>
        <MenuItem @click.native="shijian" name="3-3">游戏自定义事件</MenuItem>
    </div>

</template>

<script>
    export default {
        name: "gameBehavior",
        methods:{
            qidong(){
                this.$router.push('/qidong')
                console.log('qidong')
            },
            guanqia(){
                this.$router.push('/guanqia')
                console.log('guanqia')
            },
            shijian(){
                this.$router.push('/shijian')
                console.log('shijian')
            },
        }
    }
</script>

<style scoped>

</style>