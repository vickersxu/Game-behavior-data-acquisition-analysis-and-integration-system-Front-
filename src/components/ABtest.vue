<template>
    <div>
        <MenuItem @click.native="a" name="4-1">游戏A</MenuItem>
        <MenuItem @click.native="b" name="4-2">游戏B</MenuItem>
        <MenuItem @click.native="c" name="4-3">游戏C</MenuItem>
    </div>

</template>

<script>
    export default {
        name: "ABtest",
        methods:{
            a(){
                this.$router.push('/a')
                console.log('a')
            },
            b(){
                this.$router.push('/b')
                console.log('b')
            },
            c(){
                this.$router.push('/c')
                console.log('c')
            },
        }
    }
</script>

<style scoped>

</style>