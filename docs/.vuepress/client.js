import { defineClientConfig } from 'vuepress/client'

import Home from './layouts/Home/index.vue'
import Pigeonhole from './layouts/Pigeonhole/index.vue'
import Work from './layouts/Work/index.vue'

//自写蓝色UI主题
import './styles/index.scss'

import { ElRow, ElCol, ElProgress, ElCard, ElCarousel, ElCarouselItem, ElImage, ElButton, ElTimeline, ElTimelineItem,ElDivider ,ElTag} from "element-plus";//,ElTooltip,ElPopover
import "element-plus/dist/index.css";



// import { Tooltip, Card } from 'ant-design-vue';
// import 'ant-design-vue/es/tooltip/style/index.css';
// import 'ant-design-vue/es/card/style/index.css';
export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Home,
    Pigeonhole,
    Work
    
  },
  enhance({ app, router, siteData }) {
    // app.use(Tooltip);
    // app.use(Card);

    

    app.component(ElRow.name, ElRow);
    app.component(ElCol.name, ElCol);
    app.component(ElCard.name, ElCard);
    app.component(ElCarousel.name, ElCarousel);
    app.component(ElImage.name, ElImage);
    app.component(ElCarouselItem.name, ElCarouselItem);
    app.component(ElButton.name, ElButton);
    // app.component(ElTooltip.name,ElTooltip);
    app.component(ElProgress.name, ElProgress);
    app.component(ElTimeline.name, ElTimeline);
    app.component(ElTimelineItem.name, ElTimelineItem);

    app.component(ElDivider.name, ElDivider);
    app.component(ElTag.name, ElTag);
    
  },
  rootComponents: [],
})
