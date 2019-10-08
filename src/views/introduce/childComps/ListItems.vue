<template>
    <div id="main" class = "list_items">
        <ul v-if="iconLeft === true">
            <li v-for="item in items" :key="item.key">
                <div class="li_item">
                    <i :class="'iconfont icon_list_item ' + item.iconName" />
                    <label class="label_left_align">{{item.title}}</label>
                </div>
            </li>
        </ul>
        <ul v-else>
            <li v-for="item in items" :key="item.key" style="float:right;">
                <label class="label_right_align">{{item.title}}</label><i :class="'iconfont icon_list_item ' + item.iconName"/>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "ListItems",
        props: ['items', 'iconLeft']
    }
</script>
<style scoped>
    #main {
        width: 300px;
    }
    #main ul li {
        height: 80px;
        margin-top: 25px;
        list-style-type: none;
    }
    .li_item {
        display: block;
        height: 100%;
        width: 100%;
        padding: 0px 10px;
    }
    .li_item:hover {
        box-shadow: 0px 0px 15px 0px rgba(27,112,228,0.1);
        transform: scale(1.05, 1.05);
    }
    #main ul li label {
        position: relative;
        font-size:20px;
        font-family:SourceHanSansCN-Regular;
        font-weight:400;
        color:rgba(34,34,34,1);
        top: 5%;
    }
    #main .icon_list_item {
        position: relative;
        top: 15%;
        font-size: 40px;
        color:rgba(59,128,251,1);
    }
    .label_left_align {
        margin-left: 16px;
        text-align: left;
    }
    .label_right_align {
        margin-right: 16px;
        text-align: right;
    }
</style>
