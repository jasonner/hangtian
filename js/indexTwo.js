layui.use(['element', 'form', "table", 'laytpl', 'gettemplate', 'laydate', 'geturl'], function() {
    var element = layui.element,
        form = layui.form,
        $ = layui.jquery,
        table = layui.table,
        gettemplate = layui.gettemplate(),
        geturl = layui.geturl(),
        laydate = layui.laydate;
    laytpl = layui.laytpl;

    form.render();
    // 导入数据接口
    geturl.set({
        url: "json/data.json",
        type: "get",
        async: false
    });
    var urlObj = geturl.render();
    var base_url = urlObj.base_url;
    console.log(base_url);
    console.log(gettemplate.getParams());


    var barOption;
    var centerBar = echarts.init(document.getElementById("three-center-bar"));
    barinit(centerBar);
    var rightBar = echarts.init(document.getElementById("three-right-bar"));
    barinit(rightBar);


    window.addEventListener("resize", () => {
        centerBar.resize();
        rightBar.resize();
    });


    function barinit(dom) {


        barOption = {
            color: ["#3EB2E1", "#60C888", "#FE9844"],
            tooltip: {
                show: true,
                trigger: 'axis',
                // position: [20, 20],
                textStyle: {
                    fontSize: 12
                },
                axisPointer: {
                    type: 'line', //shadow/cross/none
                    animation: true,
                    lineStyle: {
                        color: '#CCCCCC'
                    }
                }
            },
            legend: {
                show: false,
                data: ['总量'],
                // selectedMode: 'single',
                top: 5,
                right: 2,
                icon: 'circle',
                itemGap: 10,
                itemWidth: 12,
                itemHeight: 15,
                textStyle: {
                    fontSize: 12
                }
            },
            grid: {
                top: '15%',
                left: '4%',
                right: '2%',
                bottom: '4%',
                containLabel: true
            },
            calculable: false,
            xAxis: [{
                type: 'category',
                boundaryGap: [10, 10],
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: "dashed"
                    }
                },
                axisTick: { //刻度下文字位置
                    show: false,
                    alignWithLabel: true
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#CCCCCC',
                        width: 1
                    }
                },
                axisLabel: {
                    color: '#FFFFFF',
                    interval: 0,
                    fontSize: 16
                },
                data: ['预研', '研制', '批产', '保障'],
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#FFFFFF',
                        width: 1
                    }
                },
                axisTick: { //刻度下文字位置
                    show: false,
                    alignWithLabel: true
                },
                axisLabel: {
                    formatter: '{value}亿',
                    color: '#FFFFFF',
                    fontSize: 16
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#FFFFFF',
                        width: 1,
                        type: 'solid'
                    }
                },
                // max:25,
                // splitNumber: 4,
                // name: '(%)',
                // nameLocation: 'end',
                // nameTextStyle: {
                // 	color: '#666666'
                // }
            }],
            series: [{
                    name: '2017',
                    type: 'bar',
                    // stack: '总量',
                    showSymbol: false,
                    barWidth: '20',
                    itemStyle: {
                        normal: {
                            // barBorderRadius: [10, 10, 10, 10],
                            color: new echarts.graphic.LinearGradient(
                                0, 1, 0, 0, //右、下、左、上
                                [
                                    { offset: 0, color: '#1D75E1' },
                                    { offset: 1, color: '#64FBFE' }
                                ]
                            )
                        }
                    },
                    data: [16, 15, 12, 18],

                }

            ]
        };

        dom.setOption(barOption, true);

    }




    $(".top").click(function(e) {
        e.preventDefault();
        layer.open({
            type: 1,
            // anim: 1,
            title: ['项目成本', 'font-size:16px;background-color:#3BB5A0;color:#fff;text-align:left;'],
            shadeClose: true,
            shade: 0.8,
            area: ['1080px', '580px'],
            offset: ['200px', '420px'],
            move: true,
            // moveOut: true,
            skin: 'table-skin',
            btnAlign: 'r',
            btn: ['确定', '取消'],
            id: "vendor_nodes",
            // resize: true,
            // maxmin: true,
            content: '<div>' + 111 + '</div>',
            // $('#layer_vendor'),
            success: function(layero, index) {

                // layer.style(index,  {zoom: '0.6'})
            }
        });
    });









});