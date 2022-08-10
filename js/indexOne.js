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
	$(".top").click(function (e) {
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
			success: function (layero, index) {

				// layer.style(index,  {zoom: '0.6'})
			}
		});
	});
});