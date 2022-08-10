layui.config({
    base: "./js/"
}).use(['element', 'jquery', 'gettemplate', 'geturl', 'laydate'], function() {
    var element = layui.element,
        $ = layui.jquery,
        laydate = layui.laydate,
        gettemplate = layui.gettemplate(),
        geturl = layui.geturl();

    var urlObj = geturl.render(); //接口

   //年选择器
    // laydate.render({
    //     elem: '#yearDate',
    //     type: 'year',
    //     offset: ['200px', '420px'],
    //     // position: 'static',
    //     // offset: ['708px', '60px']
    // });


	//默认展示页面
	let type = $('.navul-cont li.active').attr('type')
	geturlhtml(type);
	
    $(".navul-cont li").click(function(e) {
        e.preventDefault(); 
		$(this).addClass("active").siblings().removeClass("active");
        let type = $(this).attr('type');
		geturlhtml(type);
    });

    function geturlhtml(type) {
		gettemplate.set({
			url: `./template/${type}.html`,
			type: 'get',
			async: false,
			params: {
				data: type,
			}
		})
		let temp = gettemplate.render()
		$('#bodycont').html(temp);
    }

    // $("#navbot-left").changeImg({
    // 	'boxWidth': 257,//滚动主盒子宽度
    // 	'changeLen':1,//每次滚动元素的个数
    // 	'changeSpend':200,//滚动动画时长
    // 	'autoChange':false,//自动滚动
    // 	'changeHandle':true //是否可点击箭头滚动
    // });


	
    //缩放达到大屏效果
    screenScale($('body'), 1920, 1080);
    function screenScale(element, w, h) {
        let width = w;
        let height = h;
        let offsetWidth = window.innerWidth;
        let offsetHeight = window.innerHeight;
        let top = 0
        let left = 0
        let scaleX = offsetWidth / width
        let scaleY = offsetHeight / height
        let scale = Math.min(scaleX, scaleY);
        laypage_scale = scale;
        top = (offsetHeight - height * scale) / 2
        left = (offsetWidth - width * scale) / 2
        const transform = `translate(${left}px, ${top}px) scale(${scale})`
        element.width(width)
        element.height(height)
        element.css({ 'transform': transform })
    }
    window.onresize = function() {
        screenScale($('body'), 1920, 1080);
    }


});