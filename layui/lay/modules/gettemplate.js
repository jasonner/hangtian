layui.define(function(exports) {
	"use strict";
	var $ = layui.jquery;

	var GetTemplate = function() {
		/**
		 *  默认配置 
		 */
		this.config = {
				url:"",
				type:"",
				async:true,
				init_id:"",
				requestUrl:"",
				params:{}			
			};
		this.v = '0.0.1';
	};
	GetTemplate.prototype.render = function() {
		var _that = this;
		var template="";
		var _config = _that.config
		$.ajax({
			url:_config.url,
			type:_config.type,
			async:_config.async,
			success:function(resp){
				template=resp;
			}
		})
		return template;
	};
	/**
	 * 配置Navbar
	 * @param {Object} options
	 */
	GetTemplate.prototype.set = function(options) { 
		var that = this;
		var _config = that.config;
		//$.extend(true, that.config, options);
		that.config = options || that.config;
		return that;
	};
	
	GetTemplate.prototype.getParams = function(options) {
		var that = this;
		console.log(that)
		var _config = that.config;
			return _config.params;
		}
	
	var gettemplate = new GetTemplate();

	exports('gettemplate', function(options) {
		return gettemplate.set(options);
	});
});