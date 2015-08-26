define("conf/index", function(module, exports, require){
	var dialog = require("../comp/dialog");
	var components = require("../lib/components");
	dialog.show();
	components.hide();
	module.exports = {
		'get':function(){
			console.log(1111);
		},
		'name': 'xiaoyue'
	};
});