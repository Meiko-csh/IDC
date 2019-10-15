<template>
    <div class="item_container">
        <div class="item_row">
            <div v-for="(item, index) in imageList1" :key="index" class="img_container" v-bind:style="item_positions[index]">
                <div class="img_div" :style="{ backgroundImage: 'url(' + item+')' }" />
            </div>
        </div>
        <div class="item_row">
            <div v-for="(item, index) in imageList2" :key="index" class="img_container" v-bind:style="item_positions[index]">
                <div class="img_div" :style="{ backgroundImage: 'url(' + item+')' }" />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "CarouselItemPage",
        props: ["imageList1", "imageList2"],
        data() {
            return {
                item_positions : [
                    "left: 0px;",
                    "left: 203.3px",
                    "left: 406.6px",
                    "left: 609.9px",
                    "left: 813.2px",
                    "left: 1016.5px"
                ]
            }
        }
    }
</script>
<style scoped>
    .item_container {
        width: 1200px;
        height: 300px;
        overflow: hidden;
    }
    .item_row {
        position: relative;
        width: 100%;
        height: 140px;
        margin-bottom: 10px;
    }
    .img_container {
        position: absolute;
        top: 20px;
        width: 183px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: rgba(255, 255, 255, 1);
        border:1px solid rgba(231,231,231,1);
    }
    .img_container:hover {
        box-shadow: 0px 10px 10px 0px rgba(27,112,228,0.3);
        transform: scale(1.05, 1.05);
        border-top: 6px solid rgba(27,112,228,1);
    }
    .img_div {
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        width: 90%;
        height: 90%;
    }
</style>
