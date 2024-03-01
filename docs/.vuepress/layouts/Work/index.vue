<style scoped lang="scss">
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.topShow {
  position: -webkit-sticky;

  position: sticky;
  top: 46px;

  padding: 10px;
  box-shadow: -8px 8px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(204, 140, 140, 0.1);
  z-index: 1;


  margin-top: 80px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto
}


.project-card {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  // padding: 15px;  
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.project-card img {
  width: 100%;
  border-radius: 5px 5px 0 0;
  margin-bottom: 10px;
}

.project-card h2 {

  margin: 5px 10px;
  font-size: 18px;
}

.project-card p {
  margin: 5px 10px;
  font-size: 14px;
  line-height: 1.5;
}

.project-card:hover {
  border: 1px solid rgb(202, 198, 198);
  box-shadow: -5px 5px 5px rgba(255, 0, 0, 0.1);
}

.workdesc {
  display: -webkit-box;
  /* 用于WebKit浏览器，如Chrome和Safari */
  -webkit-line-clamp: 2;
  /* 限制显示的行数 */
  -webkit-box-orient: vertical;
  /* 垂直排列 */
  overflow: hidden;
  /* 隐藏超出的内容 */
  text-overflow: ellipsis;
  /* 显示省略号 */
}
</style>

<!-- 这个页面待添加的东西还有很多，以防后期更改成本高，暂时先把代码直接堆积上去，待完善后再统一整改 -->
<template>
  <ParentLayout>

    <template #page>

      <BgroundBox></BgroundBox>

      <div class="topShow" v-if='isTopShow'>

        <el-carousel :interval="1000" type="card" arrow="always" indicator-position="outside"
          style='background-color:rgba(255, 255, 255, 0.9);' height='300px'>

          <el-carousel-item v-for="(item, index) in curImgs">

            <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
            <el-image class="horseImg" :src="curImgs[index]" :initial-index="index"
              :preview-src-list="sortImg(curImgs, index)" :append-to-body="true" />
          </el-carousel-item>

        </el-carousel>
        <el-button style="width:100%;" @click="closeShow()" type="primary">关  闭</el-button>

      </div>



      <div class="works" style='margin-top:70px'>
        <p style='text-align:center;font-size:20px; font-weight: bold;'>生活就像编程，用代码编织热爱</p>
        <el-row style="max-width:1400px;margin:0 auto" :gutter="40" v-for="(item, rowIndex) in rows">
          <el-col :span="8" v-for="(it, colIndex) in 3">
            <div class="project-card" v-if="worksArr[rowIndex * 3 + colIndex]"
              @click="selectWork(rowIndex * 3 + colIndex)">
              <img :src="worksArr[rowIndex * 3 + colIndex].imgs[0]" alt="项目图片" style='height:200px'>
              <h2>{{ worksArr[rowIndex * 3 + colIndex].name }}</h2>

              <div style='height: 50px;'>
                <p class="workdesc">{{ worksArr[rowIndex * 3 + colIndex].description }}</p>
              </div>

            </div>
          </el-col>
        </el-row>

      </div>
    </template>
  </ParentLayout>
</template>
<script>


import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import worksArr from './works.js'
import BgroundBox from '../BgroundBox/index.vue'
export default {
  components: {
    ParentLayout,
    BgroundBox
  },
  mounted() {

  },
  beforeDestroy() {

  },
  created() {
    this.rows = Math.ceil(worksArr.length / 3)
  },
  data() {
    return {
      worksArr,
      rows: '',
      curImgs: [],
      isTopShow: false,
    };
  },
  methods: {
    sortImg(imgArr, index) {

      var lastImgArr = [];
      var retImgArr = [];
      for (let i = 0; i < imgArr.length; i++) {
        if (i <= index) {
          lastImgArr.push(imgArr[i]);
        } else {
          retImgArr.push(imgArr[i]);
        }
      }
      for (let i = 0; i < lastImgArr.length; i++) {
        retImgArr.push(imgArr[i]);
      }

      return retImgArr;
    },
    selectWork(i) {
      this.curImgs = worksArr[i].imgs;
      this.isTopShow = true;
      document.getElementsByClassName('works')[0].style.marginTop = '20px';
    },
    closeShow(){
      this.isTopShow = false;
      document.getElementsByClassName('works')[0].style.marginTop = '70px';
    }
  },
};
</script>

<style lang="less" scoped>
html.dark .el-card {
  background-color: rgb(34, 39, 46);
  color: white
}



.el-carousel /deep/ .el-carousel__container {
  height: 200px;
}

@media screen and (max-width: 719px) {
  .el-carousel /deep/ .el-carousel__container {
    height: 100px;
  }
}

// .carouselBody{
//   height: 240px;
// }

// .carouselItem{
//   height: 200px;
// }

// .el-carousel__item{
//   // height: 200px;
// }

.horseImg {
  width: 100%;
  height: 100%;
}

.card-header {
  text-align: center;
}

.card {
  margin-top: 2rem;
}

// .el-carousel__item h3 {
//   color: #475669;
//   opacity: 0.75;
//   line-height: 200px;
//   margin: 0;
//   text-align: center;
// }

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


@media screen and (max-width: 719px) {

.el-col-8 {
    margin-left:auto;
    margin-right:auto;
    margin-bottom:10px;
    max-width:95%;
    flex: 0 0 100%;
}

}
</style>
