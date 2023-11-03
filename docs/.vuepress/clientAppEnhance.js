import { defineClientAppEnhance } from "@vuepress/client";
// import {ElProgress,ElRow,ElCol,ElCard,ElCarousel,ElImage,ElButton,ElTooltip} from "element-plus/lib";

import {ElRow,ElCol,ElProgress,ElCard,ElCarousel,ElCarouselItem,ElImage,ElButton, ElTimeline, ElTimelineItem} from "element-plus";//,ElTooltip,ElPopover
import "element-plus/dist/index.css";

import { Tooltip,Card } from 'ant-design-vue';
import 'ant-design-vue/es/tooltip/style/index.css';
import 'ant-design-vue/es/card/style/index.css';

// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(Tooltip);
  app.use(Card);

  app.component(ElRow.name,ElRow);
  app.component(ElCol.name,ElCol);
  app.component(ElCard.name,ElCard);
  app.component(ElCarousel.name,ElCarousel);
  app.component(ElImage.name,ElImage);
  app.component(ElCarouselItem.name,ElCarouselItem);
  app.component(ElButton.name,ElButton);
  // app.component(ElTooltip.name,ElTooltip);
  app.component(ElProgress.name,ElProgress);
  app.component(ElTimeline.name,ElTimeline);
  app.component(ElTimelineItem.name,ElTimelineItem);
  // app.component(ElPopover.name,ElPopover);


});
