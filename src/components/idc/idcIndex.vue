<template>
    <div>
       <!-- 判定权限 -->
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            this.sperUser()
        },
        methods: {
            sperUser() {
                let that = this;
                that.$request({
                    method: 'GET',
                    url: "/kapply/idc/idcIndex",
                }).then(res => {
                    if (res.data.DataRows.power == 2 || res.data.DataRows.power == 1) {
                        // that.power = res.data.DataRows.power;
                        // that.userID = res.data.DataRows.userID;
                        // window.location(location.origin +'/cxttweb/#/idc/idcIndex');
                        //window.location.href= location.origin +"/cxttweb/#/idc/idcproduct"
                        this.$router.push('/idcproduct')

                    } else {
                        alert("用户无权限")
                    }
               

                })
            },
        }
    }
</script>
<style scoped>

</style>