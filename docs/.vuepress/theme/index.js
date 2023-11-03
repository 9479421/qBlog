const { defaultTheme } = require('@vuepress/theme-default');
const { path } = require('@vuepress/utils')
 
module.exports = (options) => {
  return {
    name: 'vuepress-theme-local',
    extends: defaultTheme(options),
    layouts: {
        // Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
        Home: path.resolve(__dirname, 'layouts/Home.vue'),
    }
  }
}