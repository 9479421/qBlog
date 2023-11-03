


<!-- 这个页面待添加的东西还有很多，以防后期更改成本高，暂时先把代码直接堆积上去，待完善后再统一整改 -->



<template>
  <div>
    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>英魂之刃PP脚本</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="80" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="80">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、RPG副本自动刷试炼打怪</p>
                  <p>2、自动做活动、签到</p>
                  <p>3、定时自动开机启动</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>

              <br />
              <span>易语言、大漠插件</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2018.10.20</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3.jpg"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc (1).jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508234632.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc.jpg"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc (1).jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508234632.png',
              ]" :append-to-body="true"></el-image>
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc (1).jpg"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc (1).jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508234632.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508234632.png"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/psc (1).jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508234632.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>常信/CCIT 杀手</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="90" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="70">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、今日校园疫情自动打卡</p>
                  <p>2、i博思上课自动签到</p>
                  <p>3、自动青年大学习</p>
                  <p>4、i博思作业一键满分</p>
                  <p>5、校园网自动连接</p>
                  <p>6、网课搜题</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>Vue2+Antdv、SpringBoot、Android</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.04.15</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220512114843.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220512114843.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235450.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235559.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235740.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235805.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235450.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220512114843.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235450.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235559.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235740.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235805.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235559.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220512114843.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235450.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235559.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235740.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235805.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235740.png"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220512114843.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235450.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235559.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235740.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235805.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235805.png"
            :initial-index="4" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220512114843.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235450.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235559.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235740.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508235805.png',
              ]" :append-to-body="true" />
        </el-carousel-item>

      </el-carousel>

      <a style="color:red;text-align:center;width:100%;display:inline-block;" target="_blank"
        href="http://ccit.wqby.vip">官网：http://ccit.wqby.vip</a>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>四级杀手</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="60" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="90">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、自助导入单词及翻译，自动爬取音标与音频</p>
                  <p>2、支持乱正序、美英音、英中互译等个性化配置</p>
                  <p>3、背单词利器</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>

              <br />
              <span>Java+JavaFX</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.03.16</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001201.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001201.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001210.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001216.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001230.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220510121524.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001210.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001201.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001210.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001216.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001230.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220510121524.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220510121524.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001216.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001201.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001210.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001216.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001230.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220510121524.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001230.png"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001201.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001210.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001216.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001230.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220510121524.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220510121524.png"
            :initial-index="4" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001201.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001210.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001216.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509001230.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220510121524.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>一点网课工作室</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="20" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="90">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、批量提交网课订单、查询订单进度</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言+Java</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2020.03.10</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509200325.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509200325.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>刺激战场方框透视</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="80" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="96">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>方框透视</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>C++</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2019.01.30</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220517143711.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220517143711.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220517143806.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220517143806.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220517143711.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220517143806.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>在线学习平台</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、在线学习平台</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>TypeScript+Vue3+Electron+SpringBoot</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.11.20</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095344.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095344.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095411.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095354.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095426.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095411.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095344.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095411.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095354.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095426.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095354.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095344.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095411.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095354.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095426.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095426.png"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095344.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095411.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095354.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221124095426.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>天气预报</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="80" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>天气预报</p>

                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>

              <br />
              <span>QT、C++</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2023.9.20</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ%E6%88%AA%E5%9B%BE20230927164103.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ%E6%88%AA%E5%9B%BE20230927164103.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>个人博客</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="30">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>简约且完美的一款自写博客</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>

              <br />
              <span>Vue3+Vuepress2.X+ElementUI Plus+AntDv</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.05.06</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509000253.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509000253.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509000346.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509000346.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509000253.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509000346.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>逃跑吧少年外挂</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="77" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="98">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、方框透视</p>
                  <p>2、雷达瞬移</p>
                  <p>3、一键高跳</p>
                  <p>4、无后坐力</p>
                  <p>5、无冷却CD</p>
                  <p>6、秒开箱子</p>
                  <p>7、倒地不死</p>
                  <p>8、草丛透视</p>
                  <p>更多……</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言+DX9</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2018.08.01</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509195204.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509195204.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194630.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194236.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/5.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194630.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509195204.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194630.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194236.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/5.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194236.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509195204.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194630.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194236.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/5.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/5.jpg"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509195204.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194630.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509194236.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/5.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>



    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>实习打卡助手</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="5">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、习讯云自动实习打卡</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>UniApp+NodeJs+UniCloud</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.12.03</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_104848.jpg"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_104848.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>



    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>图书馆抢座软件</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="10">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>支持所有cx图书馆系统自动抢座</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>NodeJs+electron+superagent</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.08.10</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220905103519.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220905103519.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220905103505.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220905103505.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220905103519.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220905103505.png',
              ]" :append-to-body="true" />
        </el-carousel-item>

      </el-carousel>
    </el-card>



    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>台球追分计分器</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="20">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>台球记分</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>UniApp</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.10.10</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20230415_210034.jpg"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20230415_210034.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ%E5%9B%BE%E7%89%8720230417233954.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ%E5%9B%BE%E7%89%8720230417233954.jpg"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20230415_210034.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ%E5%9B%BE%E7%89%8720230417233954.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>

      </el-carousel>
    </el-card>



    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>英魂之刃笨狗透视</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、显示英雄</p>
                  <p>2、显示野怪</p>
                  <p>3、方框透视</p>
                  <p>4、显示隐身</p>
                  <p>5、跨端方框(安卓)</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言、易安卓</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2016年-2018年</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png"
            :initial-index="4" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png"
            :initial-index="4" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png"
            :initial-index="5" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png"
            :initial-index="6" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223355.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/QQ图片20220508223408.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193151.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509192706.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509193701.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509204636.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230802120406.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>今日校园App请假模块</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="90" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、自助申请假条，无需班主任批准</p>
                  <p>2、扫进出校登记码自动hook跳转，绕过登记记录</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>NodeJs+Ejs+Android+Xposed+Mysql</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.06.01</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113616.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113616.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113657.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113744.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113907.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113657.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113616.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113657.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113744.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113907.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113744.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113616.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113657.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113744.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113907.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113907.png"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113616.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113657.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113744.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220607113907.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>拾图集</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="80" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="40">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、小程序显示图集供客户采购</p>
                  <p>2、管理端上传管理图集和板块</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>NodeJs+Uniapp+SpringBoot+Mysql+Vue</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.12.18</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/60207B4A2755B4B0508A0F033B3693DE.jpg"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/60207B4A2755B4B0508A0F033B3693DE.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/DD4D5B215FDA3419DF411E17CC919A74.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_105741.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105914.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/DD4D5B215FDA3419DF411E17CC919A74.jpg"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/60207B4A2755B4B0508A0F033B3693DE.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/DD4D5B215FDA3419DF411E17CC919A74.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_105741.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105914.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_105741.jpg"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/60207B4A2755B4B0508A0F033B3693DE.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/DD4D5B215FDA3419DF411E17CC919A74.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_105741.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105914.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105816.png"
            :initial-index="3" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/60207B4A2755B4B0508A0F033B3693DE.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/DD4D5B215FDA3419DF411E17CC919A74.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_105741.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105914.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105855.png"
            :initial-index="4" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/60207B4A2755B4B0508A0F033B3693DE.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/DD4D5B215FDA3419DF411E17CC919A74.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_105741.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105914.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105914.png"
            :initial-index="5" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/60207B4A2755B4B0508A0F033B3693DE.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/DD4D5B215FDA3419DF411E17CC919A74.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/Screenshot_20221221_105741.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105816.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20221221105914.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>一点学习通刷课助手</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="90" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="60">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、学习通秒刷/慢刷视频/课件</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2021.03.05</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509200505.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509200505.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201131.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201131.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509200505.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201131.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>校园开水神器</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="10">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、免扫码远程开水</p>
                  <p>2、整蛊、恶心别人，远程打水机器鸣笛、伪装机器损坏，玩法自己探索</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>Android</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.05.16</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200055.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200055.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/21.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200217.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/21.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200055.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/21.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200217.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200217.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200055.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/21.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220516200217.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>微信跳一跳自动辅助</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="10">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>微信自动跳一跳</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>C++</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2023.05.30</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/edb4586e92f7f899c8dc4b00ef431b9.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/edb4586e92f7f899c8dc4b00ef431b9.png'
              ]" :append-to-body="true" />
        </el-carousel-item>

      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>英语题目选项一键word提取器</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="78" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="40">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>帮老师做的一个工具</p>
                  <p>1、识别书本照片中所有文字</p>
                  <p>2、自动提取题目及选项，转成Word格式</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2019.07.11</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/6.jpg"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/6.jpg',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>表白墙</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="90" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="30">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>帮朋友写的一个毕设</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>PHP+Layui</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2023.4.16</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/W6S7NY%7D_%5D8UWJI2N%7BP@YZS9.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/W6S7NY%7D_%5D8UWJI2N%7BP@YZS9.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>快手信息采集爬虫</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="60">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>采集快手主播信息</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>NodeJs+electron+superagent</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.07.10</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/-28fd81ddd27c5f32.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/-28fd81ddd27c5f32.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7acaae80935d563d.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7acaae80935d563d.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/-28fd81ddd27c5f32.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7acaae80935d563d.png',
              ]" :append-to-body="true" />
        </el-carousel-item>

      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>勒索病毒</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="67" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="95">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>打开后自动给电脑所有文件递归加密上锁</p>
                  <p>付钱即可获取解锁码(一旦锁上除作者无人可解)</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2017.12.31</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>台球厅管理系统(实训作业)</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="60" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>Web实训做的小项目，凑个数量</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>Vue2+iView+SpringBoot+Redis</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2021.12.25</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509212855.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509212855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509212355.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509212355.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509212855.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509212355.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>人脸识别</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="30" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="60">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>帮老师做的一个学生认证工具</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>uniapp</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2023.06.08</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613022051.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613022051.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>QQ飞车自动跑图</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="30" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="60">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>采用大漠模拟图色识别按键实现的自动跑图刷经验脚本</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2017.08.16</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/8.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/8.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>


    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>张尧旋转小火锅记账系统</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="10">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>快速计费记账</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>electron+uni-cloud</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.10.09</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1111.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1111.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/2222.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/2222.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1111.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/2222.png',
              ]" :append-to-body="true" />
        </el-carousel-item>

      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>枪林弹雨外挂</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、方框透视</p>
                  <p>2、自动瞄准</p>
                  <p>3、全屏吸人</p>
                  <p>4、人物加速</p>
                  <p>5、超级射速</p>
                  <p>6、原地复活</p>
                  <p>7、无后坐力</p>
                  <p>8、原地复活</p>
                  <p>更多…</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>C++</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2020.09.11</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1.jpg"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509205806.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509205806.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/1.jpg',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509205806.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>教室友做的外挂</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="80">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>教我强哥做的外挂</p>
                  <p>1、扫雷一键秒杀</p>
                  <p>2、植物大战僵尸无限阳光、无CD</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">2022.04.26</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509081956.gif"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509081956.gif',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509213224.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509213224.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509081956.gif',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509213224.png',
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>

    <el-card class="card">
      <template #header>
        <div class="card-header">
          <h2>接的POST单</h2>
          <el-row justify="space-between">
            <el-col :span="6">
              <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception">
                <span>满意度</span>
              </el-progress>
              <el-progress :text-inside="true" :stroke-width="20" :percentage="99">
                <span>耗时</span>
              </el-progress>
            </el-col>
            <el-col :span="10">
              <a-tooltip placement="top">
                <template #title>
                  <p>1、斗鱼主播数据爬取</p>
                  <p>2、论坛自动回复评论器</p>
                  <p>3、股票证券数据爬取分析</p>
                  <p>4、图库爬取</p>
                </template>
                <el-button type="primary">功能介绍</el-button>
              </a-tooltip>
              <br />
              <span>易语言</span>
            </el-col>
            <el-col :span="6" style="text-align: right">
              <span style="color: rgb(35, 175, 252)">未知</span>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-carousel :interval="4000" type="card">
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201248.png"
            :initial-index="0" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201248.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201318.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201501.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/WeChat_20230613021104.gif',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613023012.png'
              ]" :append-to-body="true" />
        </el-carousel-item>

        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201318.png"
            :initial-index="1" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201248.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201318.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201501.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/WeChat_20230613021104.gif',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613023012.png'
              ]" :append-to-body="true" />
        </el-carousel-item>

        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201501.png"
            :initial-index="2" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201248.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201318.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201501.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/WeChat_20230613021104.gif',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613023012.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg"
            src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/WeChat_20230613021104.gif" :initial-index="3"
            :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201248.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201318.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201501.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/WeChat_20230613021104.gif',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613023012.png'
              ]" :append-to-body="true" />
        </el-carousel-item>

        <el-carousel-item>
          <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
          <el-image class="horseImg" src="https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613023012.png"
            :initial-index="4" :preview-src-list="[
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201248.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201318.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220509201501.png',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/WeChat_20230613021104.gif',
                'https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20230613023012.png'
              ]" :append-to-body="true" />
        </el-carousel-item>
      </el-carousel>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted(){
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
  },
  created() {
    
  },
  data() {
    return {
      workArr: [
        {
          img: "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/6.jpg",
        },
        {
          img: "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/7.png",
        },
        {
          img: "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/5.jpg",
        },
        {
          img: "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508223130.png",
        },
        {
          img: "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/20220508223133.png",
        },
        {
          img: "https://wqby-1304194722.cos.ap-nanjing.myqcloud.com/img/3.jpg",
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
html.dark .el-card {
    background-color: rgb(34,39,46);
    color:white
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
</style>
