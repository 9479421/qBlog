const fs = require("fs");
const rpath = require("path");
// 获取根目录

var genSidebar = {
  // getBlogList: function () {
  //   var list = new Array();
  //   var DOCS_PATH = rpath.resolve(__dirname, "../blog");
  //   let file_list = fs.readdirSync(DOCS_PATH);
  //   for (let i = 0; i < file_list.length; i++) {
  //     let file = file_list[i];
  //     if (file.endsWith(".md")) {
  //       var obj = new Object();
  //       var nameArr =  file.split(' ');
  //       obj.data = nameArr[0];
  //       obj.name = nameArr[1]
  //       list.push(obj);
  //     }
  //   }
  //   console.log(list);
  //   return list;
  // },
  getLearnList: function (path) {
    var obj_all = new Array();

    var list = new Array();
    var DOCS_PATH = rpath.resolve(__dirname, "../view/note");
    let file_list = fs.readdirSync(DOCS_PATH);
    for (let i = 0; i < file_list.length; i++) {
      var object = new Object();
      let file = file_list[i];
      if (file.endsWith(".md") && file.indexOf("README") == -1) {
        
      } else if (!file.endsWith(".md")) {
        let file_list = fs.readdirSync(DOCS_PATH + "/" + file);
        object.text = file;
        object.children = new Array();
        for (let i = 0; i < file_list.length; i++) {
          let file = file_list[i];
          if (file.endsWith(".md") && file.indexOf("README") == -1) {
            list.push(file);
            object.children.push(path+'/'+object.text+'/'+file);
          }
        }
        obj_all.push(object);
      }
    }
    return obj_all;
  },
};

module.exports = genSidebar;
