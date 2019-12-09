<template>
    <div class="subject-cons">
        <p class="subjects">重点产品</p>
        <div class="focusons">
            <div class="text-divs">
                <h4>政企精品网</h4>
                <p class="text-wzs">重点产品重点产品重点产品重点产品重点产品重点产品重点产品重点产品重点产品重点产品重点产品重点产品重点产品</p>
                <p class="detailss">了解详情</p>
                <Button class="btn-zds">取消重点产品</Button>

                <Button class="btn-scs">删除</Button>
            </div>

        </div>

    </div>
</template>
<script>

</script>
<style scoped>
    .subject-cons {
        width: 100%;
        margin: 0 auto;
        line-height: 50px;
        background-color: #eefafc;
    }

    .subject-cons .subjects:before {

        display: inline-block;
        content: "";
        width: 4px;
        height: 16px;
        position: relative;
        top: 0px;
        background: #00a2ca;
        margin-top: 18px;
        margin-right: 15px;
        vertical-align: top;
    }

    .subject-cons .subjects {
        width: 1200px;
        margin: 0 auto;
        font-size: 16px;
        color: #00a2ca;
    }

    .focusons {
        padding: 30px 0;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        transform: translateX(-20px);
        font-size: 16px;

    }

    .focusons>div {
        float: left;
        width: 285px;
        height: 192px;
        padding-top: 18px;
        margin: 0 20px 20px 19px;
        text-align: center;
        border: 1px solid #dadce0;
        background: #ebf2f9;
        padding-left: 8px;
        padding-right: 8px;
        cursor: pointer;
    }

    .focusons>div>h4 {
        font-size: 20px;
        font-weight: bold;
        padding-left: 17px;
        padding-right: 17px;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .text-divs:hover {
        border: 1px solid #00c1de;
        box-shadow: 0 0 2px #00c1de;
    }

    .text-wzs {
        margin-top: 20px;
        line-height: 19px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #171717;
        font-weight: 5;
        font-family: "宋体";

    }

    .detailss {
        transform: translateX(-90px);
        color: #33cde5 !important;

        margin-top: -10px !important;
    }

    .detailss:hover {
        color: #00a2ca !important;
    }

    .text-divs>button {
        transform: translatey(-27px);
    }

    .btn-zds {
        width: 130px;
        margin-left: -20px;
        border-radius: 0;
        font-family: "宋体";
    }

    .btn-scs {
        width: 60px;
        border-radius: 0;
        margin-left: 30px;
        font-family: "宋体";
    }

    .btn-zds:hover,
    .btn-scs:hover {
        background: #73777a !important;
        color: #fff;
    }

    
</style>