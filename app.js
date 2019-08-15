var Handsontable = require("handsontable");
require('handsontable/dist/handsontable.full.css');
require("handsontable/languages/all.js");
module.exports = function (opt) {
  var container = opt.container;
  var data = opt.data || [
    []
  ];
  var onChange = opt.onChange || function () {};
  var language = opt.language || 'en-US';
  var minCols = opt.minCols || 8;
  var minRows = opt.minRows || 50;


  var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    autoColumnSize: true,
    minCols: minCols,
    minRows: minRows,
    stretchH: "all",
    language: language,
    afterChange: function () {
      var ret;
      if (!hot) {
        ret = data;
      } else {
        ret = hot.getData();
      }
      onChange(ret)
    },
    afterRemoveCol: function () {
      console.log("-------afterRemoveCo----------");
      if (!hot) {
        ret = data;
      } else {
        ret = hot.getData();
      }
      onChange(ret)
    },
    afterRemoveRow: function () {
      console.log("-------afterRemoveRow----------");
      if (!hot) {
        ret = data;
      } else {
        ret = hot.getData();
      }
      onChange(ret)
    }
  });

  hot.addHook("afterRedo", function () {
    console.log("---------redo--------")
    console.log("-------afterRemoveCo----------");
    if (!hot) {
      ret = data;
    } else {
      ret = hot.getData();
    }
    onChange(ret)
  });
  
  hot.addHook("afterUndo", function () {
    console.log("---------undo--------")
    console.log("-------afterRemoveCo----------");
    if (!hot) {
      ret = data;
    } else {
      ret = hot.getData();
    }
    onChange(ret)
  });

  return hot;
}