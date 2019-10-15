<template>
    <div id="main_block">
        <div style="width:100%;height:100%;position:relative;">
            <div id="circle_layer" style="width:100%;height:100%;" class="center_align">
                <div id="bk_circle" class="center_align">
                    <label id="main_title" style="font-size:20px;">{{data.main_title}}</label>
                </div>
            </div>
            <div id="top_layer">
                <div id="icondiv1" class="icondiv" :style="'left:'+config.icon1_left+'top:'+config.icon1_top">
                    <div class="icondiv_inner">
                        <div><i :class="'iconfont icon_font '+data.icon1_name"/></div>
                    </div>
                </div>
                <div id="icondiv2" class="icondiv" :style="'left:'+config.icon2_left+'top:'+config.icon2_top">
                    <div class="icondiv_inner">
                        <div><i :class="'iconfont icon_font '+data.icon2_name"/></div>
                    </div>
                </div>
                <div id="icondiv3" class="icondiv" :style="'left:'+config.icon3_left+'top:'+config.icon3_top">
                    <div class="icondiv_inner">
                        <div><i :class="'iconfont icon_font '+data.icon3_name"/></div>
                    </div>
                </div>
                <label id="title1" class="title_label" :style="'left:'+config.title1_left+'top:'+config.title1_top">{{data.title1}}</label>
                <label id="title2" class="title_label" :style="'left:'+config.title2_left+'top:'+config.title2_top">{{data.title2}}</label>
                <label id="title3" class="title_label" :style="'left:'+config.title3_left+'top:'+config.title3_top">{{data.title3}}</label>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "CircleTriangleItem",
        props: ['config', 'data'],
        data() {
            return {
            
            }
        },
        methods: {
        
        }
    }
</script>
<style scoped>
    #main_block {
        display: block;
        width: 240px;
        height: 240px;
    }
    #bk_circle {
        width: 178px;
        height: 178px;
        border:20px solid rgba(27,112,228,1);
        border-radius:50%;
    }
    .center_align {
        display:flex;
        align-items:center;
        justify-content:center;
    }
    label {
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(27,112,228,1);
        line-height:19px;
    }
    .title_label {
        position: absolute;
        font-size: 25px;
        width: 50px;
    }
    #top_layer {
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
    }
    .icondiv {
        background: rgba(255, 255, 255, 1);
        border-radius:50%;
        position: absolute;
        width: 40px;
        height: 40px;
    }
    .icondiv_inner {
        display:flex;
        align-items:center;
        justify-content:center;
        position:relative;
        width:100%;
        height:100%;
    }
    .icon_font {
        font-size: 30px;
        color: rgba(27,112,228,1);
    }
</style>
