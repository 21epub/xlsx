### 使用方法
<!-- 版本变化情况 过滤掉data中null,undefined和空值 -->
<!-- 原项目的使用方法：
    1. npm install 
    2. npm start 
    3. http-server ./
-->
<!-- 引入到项目中使用方法: 引入 Xlsx  传入参数 -->
<!-- 参数 container  表格的容器
          minCols   表格的列数
          minRows   表格的行数
          data       echarts图表中source里的数据
          onchage方法    表格里的数据发生改变时调用的方法，data 改变后的表格数据
          language      中文
 -->
    import Xlsx  from 'xlsx ';
    var xlsx = new Xlsx({
        container:container,
        minCols,
        minRows,
        data:[
            ['-', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
        ],
        onChange:function(data){
            
        },
        language: 'zh-CN'
    })


