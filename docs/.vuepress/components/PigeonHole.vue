<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <span>共{{blogList.length}}篇文章</span>
          <!-- <el-button class="button" text>Test</el-button> -->
        </div>
      </template>

      <el-timeline>
        <el-timeline-item type="primary" v-for="it in blogList" :timestamp="it.data" placement="top">
          <el-card @click.native="directURL(it)">
            <h4 @click="directURL(it)"><span style="margin-right:20px">{{ it.data }}</span>{{ format(it.name) }}</h4>
            <!-- <p>王权霸业 committed {{it.data}}</p> -->
          </el-card>
        </el-timeline-item>

      </el-timeline>
    </el-card>
  </div>
</template>



<script>
// import Vconsole from 'vconsole';
export default {
  mounted() {
    // setInterval(function () {
    //   var a = window.document.getElementsByClassName('dark');
    //   if (a.length > 0) {
    //     var cardList = window.document.getElementsByClassName('el-card');
    //     for (var i = 0; i < cardList.length; i++) {
    //       cardList[i].style.backgroundColor = 'rgb(34,39,46)'
    //       cardList[i].style.color = 'white'
    //     }
    //   } else {
    //     var cardList = window.document.getElementsByClassName('el-card');
    //     for (var i = 0; i < cardList.length; i++) {
    //       cardList[i].style.backgroundColor = ''
    //       cardList[i].style.color = 'black'
    //     }
    //   }
    // }, 100)
    // new Vconsole();


    // 读取所有博客 置入数组
    const modulesFiles = import.meta.glob("../../blog/*.md");
    console.log("modulesFiles", modulesFiles);
    for (const path in modulesFiles) {
      var fileName = modulesFiles[path].name;
      console.log(modulesFiles[path].name);
      console.log('fileName', fileName);

      var fromIndex = fileName.lastIndexOf("blog/");
      var endIndex = fileName.lastIndexOf(".md");
      fileName = fileName.substring(fromIndex + 5, endIndex);

      var nameArr = fileName.split(" ");
      var data = nameArr[0];
      var name = nameArr[1];
      var obj = new Object();
      obj.data = data;
      obj.name = name;
      console.log(obj);
      this.blogList.push(obj);
    }
    console.log(this.blogList);
    this.blogList.reverse();
  },

  data() {
    return {
      blogList: [],
    };
  },
  methods: {
    directURL(it) {
      this.$router.push('/blog/' + it.data + ' ' + it.name + '.md')
    },
    format(str) {
      return str.replace(new RegExp('✙', 'gm'), '+');
    }
  },
  created(){
    
  }
};
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/deep/ .el-timeline-item__tail {
  border-left: 2px solid rgb(0, 176, 255)
}

html.dark .el-card {
    background-color: rgb(34,39,46);
    color:white
}

</style>
