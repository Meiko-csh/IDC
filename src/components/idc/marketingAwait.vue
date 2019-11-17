<template>
        <div>
            <!--待开发-->
            <div class="ParentWidth">
                <div class="pigeIdc-main">
                    <datam></datam>
                    <div  class="justifyContent">
                            <h2 class="justifyContent">待开发。。。</h2>
                    </div>
                   
                </div>
            </div>
        </div>
    </template>
    <script>
        import datam from '@/components/idc/datam.vue';
        export default {
            components: {
                datam,
                // treeList,
                // tail,
            },
            data() {
                return {
    
                }
            }
        }
    </script>
    <style scoped>
        .ParentWidth {
            width: 100%;
            display: flex;
        }
    
        /* 让子元素居中并且设置最大宽度 */
        .pigeIdc-main {
            max-width: 1200px;
            margin: 0 auto;
            height: 710px;
        
        }
    
        .justifyContent {
            width: 100%;height: 100%;display: flex;justify-content: center;
           margin-top: 100px;
        }
        h2{
            color: #C0C0C0;
        }
    </style>