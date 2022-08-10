layui.use(['element', 'form', "table", 'laytpl', 'gettemplate', 'laydate', 'geturl'], function () {
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
    // 净利润总额
    $(".lirunOpen").click(function (e) {
        e.preventDefault();
        layer.open({
            type: 1,
            // anim: 1,
            title: ['<img src="./img/title.png" alt="">净利润总额', ],
            shadeClose: false,
            shade: 0,
            area: ['1370px', '745px'],
            offset: ['145px', '275px'],
            move: true,
            // moveOut: true,
            skin: 'table-skin',
            btnAlign: 'r',
            btn: false, //['确定', '取消'],
            id: "layer_node",
            // resize: true,
            // maxmin: true,
            content: '<table class="layui-hide" id="ThreeTable"></table>',
            // $('#layer_vendor'),
            success: function (layero, index) {

                // layer.setTop(layero); //重点2
                var idNum = layero.selector;
                idNum = idNum.replace(/[^0-9]+/g, '');
                console.log(idNum);
                $("#layui-layer" + idNum).find('.layui-layer-setwin').html('<a title="关闭" onclick=\'layer.close(' + idNum + ')\' class="layui-layer-close" style="font-size:40px;color:#f29509;" href="javascript:;"></a>');

                table.render({
                    elem: '#ThreeTable',
                    url: '/json/test.json',
                    height: 635,
                    limit: 10,
                    size: 'lg',
                    cols: [
                        [{
                                type: 'numbers',
                                title: '序号',
                                width: 60,
                                align: 'center'
                            },
                            {
                                field: 'id',
                                title: '单位',
                                align: 'center',
                                width: 100
                            },
                            {
                                field: 'username',
                                title: '年度目标',
                                align: 'center',
                                width: 100
                            },
                            {
                                field: 'sex',
                                title: '本月序时进度指标完成率',
                                align: 'center'
                            },
                            {
                                field: 'benyu',
                                title: '本月目标',
                                align: 'center',
                                width: 100
                            },
                            {
                                field: 'sign',
                                title: '本月完成值',
                                align: 'center',
                                width: 120
                            },
                            {
                                field: 'experience',
                                title: '本月计划完成率',
                                align: 'center',
                                width: 160
                            },
                            {
                                field: 'score',
                                title: '较目标值差额',
                                align: 'center',
                                width: 140
                            },
                            {
                                field: 'score',
                                title: '上月完成值',
                                align: 'center',
                                width: 120
                            },
                            {
                                field: 'score',
                                title: '上年快报同期',
                                align: 'center',
                                width: 140
                            }, {
                                field: 'score',
                                title: '同比',
                                align: 'center',
                                width: 100
                            }
                        ]
                    ]
                });
            }
        });
    });

    // 新签合同总额
    $(".hetongOpens").click(function (e) {
        e.preventDefault();
        layer.open({
            type: 1,
            // anim: 1,
            title: ['<img src="./img/title.png" alt="">新签合同总额', ],
            shadeClose: false,
            shade: 0,
            area: ['1370px', '745px'],
            // offset: ['145px', '275px'],
            move: true,
            // moveOut: true,
            skin: 'table-skin',
            btnAlign: 'r',
            btn: false, //['确定', '取消'],
            id: "layer_node",
            // resize: true,
            // maxmin: true,
            content: '<table class="layui-hide" id="ThreeTable"></table>',
            // $('#layer_vendor'),
            success: function (layero, index) {

                // layer.setTop(layero); //重点2
                var idNum = layero.selector;
                idNum = idNum.replace(/[^0-9]+/g, '');
                console.log(idNum);
                $("#layui-layer" + idNum).find('.layui-layer-setwin').html('<a title="关闭" onclick=\'layer.close(' + idNum + ')\' class="layui-layer-close" style="font-size:40px;color:#f29509;" href="javascript:;"></a>');

                table.render({
                    elem: '#ThreeTable',
                    url: '/json/test.json',
                    height: 635,
                    limit: 10,
                    size: 'lg',
                    cols: [
                        [{
                                type: 'numbers',
                                title: '序号',
                                width: 60,
                                align: 'center',
                                rowspan: "2"
                            },
                            {
                                field: 'id',
                                title: '单位',
                                align: 'center',
                                width: 100,
                                rowspan: "2"
                            },
                            {
                                field: 'username',
                                title: '储备合同总额',
                                align: 'center',
                                width: 100,
                                rowspan: "2"
                            },
                            {
                                field: 'sex',
                                title: '往年结转合同',
                                align: 'center',
                                rowspan: "2"
                            },
                            {
                                field: 'benyu',
                                title: '新签合同',
                                align: 'center',
                                width: 100,
                                rowspan: "2"
                            },
                            {
                                field: 'sign',
                                title: '已落实待签 合同',
                                align: 'center',
                                width: 120,
                                rowspan: "2"
                            }],

                          [{
                                title: '营业收入',
                                colspan: "2",
                                align: 'center'
                            },
                            {
                                title: '本年计划结算收入',
                                colspan: "2",
                                align: 'center'
                            } ],

                        [{
                                field: 'experience',
                                title: '年度目标',
                                align: 'center',
                                width: 160
                            },
                            {
                                field: 'score',
                                title: '当前差额',
                                align: 'center',
                                width: 140
                            },
                            {
                                field: 'score',
                                title: '计划结算',
                                align: 'center',
                                width: 120
                            },
                            {
                                field: 'score',
                                title: '剩余可结算',
                                align: 'center',
                                width: 140
                            }
                        , {
                            field: 'score',
                            title: '计划结算占收 入目标比',
                            align: 'center',
                            width: 100
                        }]


                    ]
                });
            }
        });
    });







    var barOption;
    var ulonetopBar = echarts.init(document.getElementById("Tcont-ulonetop-cont"));
    barinit(ulonetopBar);
    var ulthreecenBar = echarts.init(document.getElementById("Tcont-threecen-cont"));
    barinit(ulthreecenBar);
    var ulthreebotBar = echarts.init(document.getElementById("Tcont-threebot-cont"));
    barinit(ulthreebotBar);


    var toptwoBar = echarts.init(document.getElementById("toptwo-bar"));
    dapbarinit(toptwoBar);

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
                    type: 'shadow', //shadow/cross/none
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
                data: ['南京长峰', '重庆金美', ' 航天开元', '航天长屏', '福州福发'],
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
                    formatter: '{value}万',
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
                // name: '营业收入',
                // nameLocation: 'center',
                // nameTextStyle: {
                //     fontSize: 16,
                //     color: '#FFFFFF'
                // }
            }],
            series: [{
                    name: '营业收入',
                    type: 'bar',
                    // stack: '总量',
                    showSymbol: false,
                    barWidth: '20',
                    itemStyle: {
                        normal: {
                            // barBorderRadius: [10, 10, 10, 10],
                            color: new echarts.graphic.LinearGradient(
                                0, 1, 0, 0, //右、下、左、上
                                [{
                                        offset: 0,
                                        color: '#1D75E1'
                                    },
                                    {
                                        offset: 1,
                                        color: '#64FBFE'
                                    }
                                ]
                            )
                        }
                    },
                    data: [380, 310, 290, 350, 420],

                }

            ]
        };

        dom.setOption(barOption, true);

    }

    function dapbarinit(dom) {

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
                    type: 'shadow', //shadow/cross/none
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
                top: '10%',
                left: '4%',
                right: '10%',
                bottom: '4%',
                containLabel: true
            },
            calculable: false,
            xAxis: [{
                // type: 'category',
                type: 'value',
                // boundaryGap: [10, 10],
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#FFFFFF',
                        width: 1,
                        type: 'solid'
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
                    formatter: '{value}亿',
                    color: '#FFFFFF',
                    fontSize: 16
                },
            }],
            yAxis: [{
                // type: 'value',
                type: 'category',
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
                    formatter: '{value}万',
                    color: '#FFFFFF',
                    fontSize: 16
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#FFFFFF',
                        width: 1,
                        type: 'solid'
                    }
                },
                data: ['南京长峰', '重庆金美', ' 航天开元', '航天长屏', '福州福发'],
                // max:25,
                // splitNumber: 4,
                // name: '营业收入',
                // nameLocation: 'center',
                // nameTextStyle: {
                //     fontSize: 16,
                //     color: '#FFFFFF'
                // }
            }],
            series: [{
                    name: '营业收入',
                    type: 'bar',
                    // stack: '总量',
                    showSymbol: false,
                    barWidth: '20',
                    itemStyle: {
                        normal: {
                            // barBorderRadius: [10, 10, 10, 10],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, //右、下、左、上
                                [{
                                        offset: 0,
                                        color: '#1D75E1'
                                    },
                                    {
                                        offset: 1,
                                        color: '#64FBFE'
                                    }
                                ]
                            )
                        }
                    },
                    data: [380, 310, 290, 350, 420],

                }

            ]
        };

        dom.setOption(barOption, true);

    }


    var topthreePie = echarts.init(document.getElementById("topthree-pie"));
    var pietoption = {
        color: ['#10EFEA', '#1785f0'],
        tooltip: {
            trigger: 'item',
            // formatter: '{b}: {c}人 <br/> 占比: {d}%'
        },
        legend: {
            show: false,
            orient: 'vertical',
            icon: "circle",
            right: 10,
            top: 10,
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 2,
            },
            textStyle: {
                fontSize: 16,
                color: '#FFFFFF'
            }
            // bottom: 20
        },
        series: [{
            name: '合同军民品分析',
            type: 'pie',
            // center: ['50%', '55%'],
            radius: ['40%', '65%'],
            label: {
                formatter: '{b}\n{d}%',
                minMargin: 5,
                fontSize: 16,
                color: '#ffffff'
            },
            labelLine: {
                length: 15,
                length2: 20,
                lineStyle: {
                    color: '#FFFFFF'
                }
                // maxSurfaceAngle: 80
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#cae3ff'
            },
            data: [{
                    value: 40,
                    name: '民品'
                },
                {
                    value: 60,
                    name: '军品'
                }
            ]
        }]
    };
    topthreePie.setOption(pietoption, true);


    var topthreeLine = echarts.init(document.getElementById("topthree-line"));


    var lineOption = {
        color: ["#3EB2E1", "#60C888", "#FE9844"],
        tooltip: {
            show: true,
            trigger: 'axis',
            // position: [20, 20],
            textStyle: {
                fontSize: 12
            },
            axisPointer: {
                type: 'shadow', //shadow/cross/none
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
            data: ['1月', '2月', ' 3月', '4月', '5月', '6月', '7月', ' 8月', '9月', '10月', '11月', '12月'],
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
                formatter: '{value}万',
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
            // name: '营业收入',
            // nameLocation: 'center',
            // nameTextStyle: {
            //     fontSize: 16,
            //     color: '#FFFFFF'
            // }
        }],
        series: [{
                name: '营业收入',
                type: 'line',
                // stack: '总量',
                showSymbol: false,
                areaStyle: {},
                itemStyle: {
                    normal: {
                        // barBorderRadius: [10, 10, 10, 10],
                        color: new echarts.graphic.LinearGradient(
                            0, 1, 0, 0, //右、下、左、上
                            [{
                                    offset: 0,
                                    color: '#1D75E1'
                                },
                                {
                                    offset: 1,
                                    color: '#64FBFE'
                                }
                            ]
                        )
                    }
                },
                data: [380, 310, 290, 350, 320, 380, 410, 290, 350, 420, 350, 420],

            }

        ]
    };

    topthreeLine.setOption(lineOption, true);






    var toponepieoption;
    var toponepie = echarts.init(document.getElementById("topone-pie"));
    toponepieinit(toponepie);
    var toponepies = echarts.init(document.getElementById("topone-pies"));
    toponepieinit(toponepies);

    function toponepieinit(dom) {
        toponepieoption = {
            color: ['#054da8', '#64FBFE'],
            title: {
                text: '合同确认收入比例',
                left: 'center',
                bottom: 0,
                textStyle: {
                    // fontFamily: '14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif',
                    fontSize: 18,
                    color: '#FFFFFF'
                }
            },
            tooltip: {
                show: false,
                trigger: 'item'
            },
            legend: {
                show: false,
                top: '5%',
                left: 'center'
            },
            series: [{
                name: '',
                type: 'pie',
                center: ['50%', '40%'],
                radius: ['40%', '65%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    formatter: '{d}%',
                    fontSize: 20,
                    color: '#FFFFFF',
                    position: 'center'
                },
                emphasis: {
                    scale: false,
                    label: {
                        show: true,
                        fontSize: 20,
                        color: '#FFFFFF'
                    }
                },
                labelLine: {
                    show: false
                },
                itemStyle: {
                    borderWidth: 2,
                    borderColor: '#cae3ff'
                },
                data: [{
                        value: 9,
                        name: 'Direct',
                        itemStyle: {
                            normal: {
                                // barBorderRadius: [10, 10, 10, 10],
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 1, 0, //右、下、左、上
                                    [{
                                            offset: 0,
                                            color: '#1D75E1'
                                        },
                                        {
                                            offset: 1,
                                            color: '#64FBFE'
                                        }
                                    ]
                                )
                            }
                        },
                    },
                    {
                        value: 1,
                        name: 'Search Engine',
                        label: {
                            show: false,
                        },
                        itemStyle: {
                            // opacity: 0,
                            borderWidth: 0,
                            borderColor: '#054da8'
                        },
                    }
                ]
            }]
        };
        dom.setOption(toponepieoption, true);
    }




    var twobotBar = echarts.init(document.getElementById("Tcont-twobot-cont"));

    var botbarOption = {
        color: ["#66ffff", "#60C888", "#FE9844"],
        tooltip: {
            show: true,
            trigger: 'axis',
            // position: [20, 20],
            textStyle: {
                fontSize: 12
            },
            axisPointer: {
                type: 'shadow', //shadow/cross/none
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
                formatter: '{value}万',
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
            // name: '营业收入',
            // nameLocation: 'center',
            // nameTextStyle: {
            //     fontSize: 16,
            //     color: '#FFFFFF'
            // }
        }],
        series: [{
                name: '营业收入',
                type: 'line',
                // stack: '总量',
                symbol: 'circle',
                symbolSize: 10,
                data: [380, 310, 290, 350, 420, 380, 310, 290, 350, 420, 380, 310],

            }

        ]
    };

    twobotBar.setOption(botbarOption, true);





    var onebotPie = echarts.init(document.getElementById("Tcont-ul-onebot"));
    var pietoption = {
        color: ['#1785f0', '#88a8ec', '#04a8ef', '#89b8ea'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}人 <br/> 占比: {d}%'
        },
        legend: {
            orient: 'vertical',
            icon: "circle",
            right: 10,
            top: 10,
            itemStyle: {
                borderColor: '#ffffff',
                borderWidth: 2,
            },
            textStyle: {
                fontSize: 16,
                color: '#FFFFFF'
            }
            // bottom: 20
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            center: ['50%', '55%'],
            radius: ['40%', '65%'],
            label: {
                formatter: '{b}\n{d}%',
                minMargin: 5,
                fontSize: 16,
                color: '#ffffff'
            },
            labelLine: {
                length: 15,
                length2: 20,
                lineStyle: {
                    color: '#FFFFFF'
                }
                // maxSurfaceAngle: 80
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#cae3ff'
            },
            data: [{
                    value: 1048,
                    name: '积极分子'
                },
                {
                    value: 735,
                    name: '申请人'
                },
                {
                    value: 580,
                    name: '预备党员'
                },
                {
                    value: 484,
                    name: '发展对象'
                }
            ]
        }]
    };
    onebotPie.setOption(pietoption, true);


    var threetopPie = echarts.init(document.getElementById("Tcont-ul-threetop"));
    var piebottion = {
        color: ['#1785f0', '#88a8ec', '#04a8ef', '#89b8ea'],
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}人 <br/> 占比: {d}%'
        },
        legend: {
            show: false,
            orient: 'vertical',
            icon: "circle",
            right: 10,
            top: 10,
            textStyle: {
                fontSize: 16,
                color: '#FFFFFF'
            }
            // bottom: 20
        },
        series: [{
            name: '职工类型',
            type: 'pie',
            center: ['50%', '50%'],
            // radius: ['40%', '65%'],
            label: {
                formatter: '{b}\n{d}%',
                minMargin: 5,
                fontSize: 16,
                color: '#FFFFFF'
            },
            // emphasis:{
            //     label: {
            //         formatter: '{b}\n{d}%',
            //     }
            // },
            labelLine: {
                length: 15,
                length2: 20,
                lineStyle: {
                    color: '#FFFFFF'
                }
                // maxSurfaceAngle: 80
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#cae3ff'
            },
            data: [{
                    value: 200,
                    name: '专业技术人员'
                },
                {
                    value: 100,
                    name: '研发人员'
                },
                {
                    value: 529,
                    name: '技能人员'
                },
                {
                    value: 701,
                    name: '管理人员'
                }
            ]
        }]
    };
    threetopPie.setOption(piebottion, true);







});