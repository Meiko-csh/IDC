<template>
    <div class="members_components">
        <div class="carousel_wrapper">
            <Carousel v-model="carousel_value" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow" class="carousel" @on-change="this.carouselValueChanged">
                <CarouselItem v-for="(item, index) in pageImageLists" :key="index">
                    <CarouselItemPage :imageList1="item.imageList1" :imageList2="item.imageList2" />
                </CarouselItem>
            </Carousel>
        </div>
        <div style="height: 40px;">
            <i :class="['iconfont','iconzuobian',leftBtnEnabled?'button_icon':'button_gray']" style="position:absolute;right:50.5%;" @click="previous" />
            <i :class="['iconfont','iconyoubian',rigthBtnEnabled?'button_icon':'button_gray']" style="position:absolute;left:50.5%;" @click="next" />
        </div>
    </div>
</template>
<script>
    import CarouselItemPage from './CarouselItemPage'
    export default {
        name: "AllianceMembers",
        components: { CarouselItemPage },
        data() {
            return {
                leftBtnEnabled: true,
                rigthBtnEnabled: true,
                carousel_value: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 5000,
                    dots: 'none',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'never'
                },
                timerCount: 0,
                itemIndex: 0,
                pageIndex: 0,
                pageImageLists: [],
                testItems: [
                    require('@/assets/img/alliancemembers/1.png'),
                    require('@/assets/img/alliancemembers/2.png'),
                    require('@/assets/img/alliancemembers/3.png'),
                    require('@/assets/img/alliancemembers/4.png'),
                    require('@/assets/img/alliancemembers/5.png'),
                    require('@/assets/img/alliancemembers/6.png'),
                    require('@/assets/img/alliancemembers/7.png'),
                    require('@/assets/img/alliancemembers/8.png'),
                    require('@/assets/img/alliancemembers/9.png'),
                    require('@/assets/img/alliancemembers/10.png'),
                    require('@/assets/img/alliancemembers/11.png'),
                    require('@/assets/img/alliancemembers/12.png'),
                    require('@/assets/img/alliancemembers/13.png'),
                    require('@/assets/img/alliancemembers/14.jpg'),
                    require('@/assets/img/alliancemembers/15.png'),
                    require('@/assets/img/alliancemembers/16.png'),
                    require('@/assets/img/alliancemembers/17.png'),
                    require('@/assets/img/alliancemembers/18.png'),
                    require('@/assets/img/alliancemembers/19.png'),
                    require('@/assets/img/alliancemembers/20.png'),
                    require('@/assets/img/alliancemembers/21.png'),
                    require('@/assets/img/alliancemembers/22.png'),
                    require('@/assets/img/alliancemembers/23.png'),
                    require('@/assets/img/alliancemembers/24.png'),
                    require('@/assets/img/alliancemembers/25.png'),
                    require('@/assets/img/alliancemembers/26.png'),
                    require('@/assets/img/alliancemembers/27.png'),
                    require('@/assets/img/alliancemembers/28.png'),
                    require('@/assets/img/alliancemembers/29.png'),
                    require('@/assets/img/alliancemembers/30.png'),
                    require('@/assets/img/alliancemembers/31.png'),
                    require('@/assets/img/alliancemembers/32.png'),
                    require('@/assets/img/alliancemembers/33.png'),
                    require('@/assets/img/alliancemembers/34.png'),
                    require('@/assets/img/alliancemembers/35.png'),
                    require('@/assets/img/alliancemembers/36.png'),
                    require('@/assets/img/alliancemembers/37.png'),
                    require('@/assets/img/alliancemembers/38.png'),
                    require('@/assets/img/alliancemembers/39.png'),
                    require('@/assets/img/alliancemembers/40.png'),
                    require('@/assets/img/alliancemembers/41.png'),
                    require('@/assets/img/alliancemembers/42.png'),
                    require('@/assets/img/alliancemembers/43.png'),
                    require('@/assets/img/alliancemembers/44.png'),
                    require('@/assets/img/alliancemembers/45.gif'),
                    require('@/assets/img/alliancemembers/46.png'),
                    require('@/assets/img/alliancemembers/47.png'),
                    require('@/assets/img/alliancemembers/48.png'),
                    require('@/assets/img/alliancemembers/49.png'),
                    require('@/assets/img/alliancemembers/50.png'),
                    require('@/assets/img/alliancemembers/51.png'),
                ]
            }
        },
        mounted: function(params) {
            let len = this.testItems.length
            let index = 0
            let sumArrays = new Array()
            while(index < len) {
                let array = new Array()
                for(let k = 0; k < 12 && (k + index) < len; k++) {
                    array.push(this.testItems[k + index])
                }
                index += array.length
                if(array.length > 6) {
                    let imageList1 = array.slice(0, 6)
                    let imageList2 = array.slice(6)
                    sumArrays.push({'imageList1': imageList1, 'imageList2': imageList2})
                } else {
                    sumArrays.push({'imageList1': array, 'imageList2': []})
                }
            }
            this.pageImageLists = sumArrays
            this.updateButtonStatus(this.carousel_value)
        },
        methods: {
            previous: function () {
                if(this.leftBtnEnabled) {
                    this.carousel_value --
                    this.updateButtonStatus(this.carousel_value)
                }
            },
            next: function() {
                if(this.rigthBtnEnabled) {
                    this.carousel_value ++
                    this.updateButtonStatus(this.carousel_value)
                }
            },
            carouselValueChanged: function(oldValue, newValue) {
                this.updateButtonStatus(newValue)
            },
            updateButtonStatus: function(currentValue) {
                if(currentValue <= 0) {
                    this.leftBtnEnabled = false
                } else {
                    this.leftBtnEnabled = true
                }

                if(currentValue >= this.pageImageLists.length - 1) {
                    this.rigthBtnEnabled = false
                } else {
                    this.rigthBtnEnabled = true
                }
            }
        }
    }
</script>
<style scoped>
    .members_components {
        width: 1200px;
        height: 340px;
        overflow: hidden;
    }
    .carousel_wrapper {
        width: 100%;
        height: 300px;
    }
    .carousel {
        width: 100%;
        height: 100%;
    }
    .button_icon {
        position: relative;
        margin: 0 auto;
        font-size: 25px;
        color: rgb(25, 120, 245);
    }
    .button_icon:hover {
        color: #175dbb;
    }
    .button_icon:active {
        transform: scale(1.15, 1.15);
    }
    .button_gray {
        position: relative;
        margin: 0 auto;
        font-size: 25px;
        color: rgba(192, 192, 192, 1);
    }
</style>
