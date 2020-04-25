<template>

    <div>
        <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">HIVE终端WEB执行工具</p>
            <Input v-model="value7" type="textarea" :autosize="true" placeholder="请输入接收邮箱..." />
            <br><br>
            <Input v-model="value8" type="textarea" :autosize="{minRows: 5,maxRows: 100}" placeholder="请输入HQL语句...
在您使用本公举时请先自行检查SQL语法（本工具的SQL正则验证正在赶制中）。
或者点击下面的验证SQL合法性按钮进行第三方验证。
检测是为了错误后本页面没有回显，导致浪费您宝贵的时间。" />
            <br><br>
            <a href="https://tool.lu/sql/" target="_blank"><Button type="success">验证SQL</Button></a>

            <Button type="primary" @click="modal1 = true">执行SQL</Button>
            <Modal
                    v-model="modal1"
                    title="请认证确认以下信息"
                    @on-ok="ok"
                    @on-cancel="cancel">
                <p>请再次确认SQL语法是否正确</p>
                <p>确认SQL业务逻辑是否</p>
                <p>确认邮箱是否正确,查询结果将会稍后发送到您邮箱</p>

            </Modal>
        </Card>
        </div>

    </div>

</template>

<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('任务已提交，请等待邮件！');
            },
            cancel () {
                this.$Message.info('已取消！');
            }
        }
    }
</script>

<style scoped>

</style>