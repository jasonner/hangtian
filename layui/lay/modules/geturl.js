layui.define(['element'], function(exports) {
	"use strict";
	var $ = layui.jquery,
	layer = layui.layer,
		element = layui.element;
		// layer = parent.layer === undefined ? layui.layer : parent.layer,
		// element = layui.element,
		// realtable = layui.realtable();

	var GetUrl = function() {
		/**
		 *  默认配置 
		 */
		this.config = {
				url:"",
				type:"",
				async:true
			};
		this.v = '0.0.1';
	};
GetUrl.prototype.render = function() {
		var _that = this;
		var urlObj={};
		var _config = _that.config;
		$.ajax({
			url:_config.url,
			type:_config.type,
			async:_config.async,
			dataType:"text",
			success:function(resp){
				urlObj=eval('(' + resp + ')');
        			// urlObj=JSON.parse(resp);
			}
		})
    return urlObj;
	};
	/**
	 * 配置Navbar
	 * @param {Object} options
	 */
	GetUrl.prototype.set = function(options) {
		var that = this;
		var _config = that.config;
		$.extend(true, that.config, options);
		return that;
	};
	
	
	var geturl = new GetUrl();

	exports('geturl', function(options) {
		return geturl.set(options);
	});
});