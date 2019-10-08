<template>
    <span id = "main_block" :style="'width:'+config.width+';top:'+config.top+';left:'+config.left">
        <h3 id="title">{{data.title}}</h3>
        <p id="p1" style="margin-top:30px;">{{data.p1}}</p>
        <p id="p2" style="margin-top:25px;">{{data.p2}}</p>
    </span>
</template>
<script>
    export default {
        name: "RectangeBlockItem",
        props: ['data', 'config']
    }
</script>
<style scoped>
    #main_block {
        display: block;
        position: absolute;
        height: 160px;
        background: rgba(255,255,255, 0.2);
        box-shadow: 0px 0px 20px 0px rgba(14,65,134,0.6);
    }
    #main_block:hover {
        transform: scale(1.05, 1.05);
        border: 1px solid rgba(255,255,255,0.5);
    }
    #main_block h3 {
        margin-left: 30px;
        margin-top: 30px;
        font-size: 26px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: rgba(255,255,255,1);
        line-height: 18px;
    }
    #main_block p {
        margin-left: 30px;
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(225,225,225,1);
        line-height: 6px;
    }
</style>
