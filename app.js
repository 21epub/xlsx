
var Handsontable = require("handsontable");
require('handsontable/dist/handsontable.full.css');
require("handsontable/languages/all.js");
module.exports=function(opt){
    var container =opt.container;
    var data=opt.data||[[]];
    var onChange =opt.onChange||function(){} ;
    var language =opt.language||'en-US' ;
  

    var hot = new Handsontable(container,{
        data: data,
        rowHeaders: true,
        colHeaders: true,
        contextMenu:true,
        autoColumnSize:true,
        minCols:5,
        minRows:5,
        stretchH:"all",
        language: language,
        afterChange:function(){
                var ret ;
                if(!hot){
                    ret = data;
                }else{
                    ret = hot.getData();
                }
                onChange(ret)
            }
    });
    return hot;
}