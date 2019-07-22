### 使用方法

    import Xlsx  from 'xlsx ';
    var xlsx = new Xlsx({
        container:container,
        data:[
            ['', 'Ford', 'Tesla', 'Toyota', 'Honda'],
            ['2017', 10, 11, 12, 13],
            ['2018', 20, 11, 14, 13],
            ['2019', 30, 15, 12, 13]
        ],
        onChange:function(data){
            
        },
        language: 'zh-CN'
    })


