<template>
    <Carousel v-model="carouselValue"
              :autoplay="carouselSetting.autoplay"
              :autoplay-speed="carouselSetting.autoplaySpeed"
              :dots="carouselSetting.dots"
              :radius-dot="carouselSetting.radiusDot"
              :trigger="carouselSetting.trigger"
              :loop="carouselSetting.loop"
              :arrow="carouselSetting.arrow">
        <CarouselItem>
            <div class="demo-carousel">
                <div :style="bannerDivStyle"></div>
                <!--                <div style="text-align: center;height: 345px">-->
                <!--                    <img src="~assets/img/home/banner2.png" alt=""-->
                <!--                         style="top: 105px;position: relative">-->
                <!--                </div>-->
                <!--                <div style="text-align: center;height: 50px">{{carouselSetting.bannerTitle}}</div>-->
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
    import banner1 from 'assets/img/home/banner1.png'

    export default {
        name: "HomeCarousel",
        props: ["carouselValue", "carouselSetting"],
        data() {
            return {
                bannerDivStyle:
                    {
                        backgroundImage: 'url(' + banner1 + ')',
                        backgroundSize: '1920px',
                        backgroundPositionY: 'calc( 50% - 0)',
                        backgroundPositionX: '50%',
                        height: '380px',
                        backgroundRepeatX: 'no-repeat',
                        backgroundRepeatY: 'no-repeat'
                    }

            };
        }
    }
</script>

<style scoped>

    /* 开发中倒序排列  */
    .demo-carousel {
        /*height: 410px;*/
        font-size: 36px;
        color: #222222;
    }
</style>
<style>
    /*走马灯最下面条形隐藏掉*/
    .ivu-carousel-dots.ivu-carousel-dots-inside {
        display: none !important;
    }
</style>
