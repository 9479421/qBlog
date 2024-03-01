<script setup>
import { CirclePlusFilled } from '@element-plus/icons-vue'

</script>


<template>
    <ParentLayout>
        <template #page>

            <div style="margin-top: 70px;">
                <BgroundBox></BgroundBox>
                <el-row :gutter="10">
                    <el-col :span="6" >

                        <div class="sticky-card" style="max-width: 400px; background-color:rgba(252, 255, 255, 0.5);">
                            <h2>不良人 's Blog</h2>


                            <div class="avatar">
                                <img src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/b_9523abbb426ea0c8a21b2754fdc52300.jpg"
                                    alt="Avatar">
                            </div>
                            <div class="counts">
                                <div class="count">
                                    <strong>10</strong>
                                    <span>文章</span>
                                </div>
                                <div class="count">
                                    <strong>5</strong>
                                    <span>目录</span>
                                </div>
                                <div class="count">
                                    <strong>8</strong>
                                    <span>标签</span>
                                </div>
                            </div>

                            <el-button style="width:100%">猜猜这里后面会更新什么内容</el-button>


                        </div>

                    </el-col>
                    <el-col :span="8">

                        <div style="max-width: 500px;">


                            <div v-for="(item, index) in timelineData">
                                <blockquote style="font-size: 18px;font-weight: bold;">
                                    <p>{{ item.year + '年' }}</p>
                                </blockquote>

                                <el-timeline>
                                    <el-timeline-item placement="top" :icon="CirclePlusFilled" type="info"
                                        v-for="it in item.value" @click="directURL(it.path)"
                                        @mouseenter="curArticle = fixPic(it.info.excerpt)">
                                        <span><span style="margin-right:20px;font-size: 13px;color:rgb(123, 133, 129);">{{
                                            dateFormat(it.info.date)
                                        }}</span> <span class="title" style="font-size: 16px;">{{ it.info.title }}</span>
                                        </span>

                                        <el-tag style="margin-left: 3px;" size="small" :type="getRandomType()"
                                            v-for="i in it.info.tag" round>
                                            {{ i }}
                                        </el-tag>

                                    </el-timeline-item>
                                </el-timeline>
                            </div>
                        </div>

                    </el-col>



                    <el-col :span="6" style="border: 1px solid rgb(245, 244, 244)">
                        <div class="preview" style="float:left">
                            <h4 style="text-align: center;">博客预览</h4>
                            <div v-html="curArticle"></div>
                        </div>
                    </el-col>
                </el-row>


            </div>
        </template>
    </ParentLayout>
</template>

<style scoped>
.sticky-card {
    position: -webkit-sticky;
    /* Safari */
    position: sticky;
    top: 60px;

    padding: 10px;
    box-shadow: -8px 8px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(204, 140, 140, 0.1);
    z-index: 1;
    text-align: center;

    /* margin: 0 auto; */
    float: right;
}


.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #eee;
    display: inline-block;
    margin-bottom: 10px;
    vertical-align: middle;
}

.avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.counts {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

.count {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.count strong {
    font-size: 1.2em;
}

.count span {
    font-size: 0.8em;
    color: #777;
}



@media screen and (max-width: 719px) {

.el-col-8 {
    margin-left:auto;
    margin-right:auto;
    margin-bottom:10px;
    max-width:95%;
    flex: 0 0 100%;
}
.sticky-card {
    display: none;
}
.preview{
    display: none;
}

}
</style>


<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { useBlogType } from '@vuepress/plugin-blog/client'
import dateFormat from '../../utils/dateUtils'
import BgroundBox from '../BgroundBox/index.vue'

export default {
    components: {
        ParentLayout,
        useBlogType,
        BgroundBox
    },
    mounted() {
        var objData = [];
        var objArray = [];
        const timelines = useBlogType('Pigeonhole')
        const items = timelines.value.items;
        console.log(items);
        for (var i = 0; i < items.length; i++) {
            const item = items[i]
            const date = item.info.date
            const year = dateFormat(date, 'year')
            objData[year] ? objData[year].push(item) : (objData[year] = [item])
        }
        Object.keys(objData).forEach((item) => {
            objArray.unshift({ year: item, value: objData[item] })
        })
        console.log(objArray)
        this.timelineData = objArray;
    },

    data() {
        return {
            timelineData: [],
            curArticle: ''
        };
    },
    methods: {
        directURL(it) {
            this.$router.push(it)
        },
        dateFormat,
        getRandomType() {
            var rand = Math.ceil(Math.random() * 5);
            if (rand == 1) {
                return 'success'
            }
            if (rand == 2) {
                return 'info'
            }
            if (rand == 3) {
                return 'warning'
            }
            if (rand == 4) {
                return 'danger'
            }
            return ''
        },

        fixPic(html) {
            return html.replace(/<img/g, "<img style='max-width:100%;height:auto;'")
        }

    },
    created() {

    }
};
</script> 


<style lang="scss" scoped>
li {
    border-bottom: 1px dashed #e4e0e0a3;
}

 html.dark  {
    .sticky-card{
        color:black;
    }
    .title{
        color:white
    }
}

.el-timeline-item {

    padding-bottom: 0px;
}

.el-timeline-item:hover {
    border: 1px solid rgb(131, 125, 125);
}
</style>
