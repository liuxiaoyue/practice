var require = function(path){
	var p = require.resolve(path);
};

require.modules = {};

require.register = function(id,fn){
	require.modules[id] = fn;
};

require.resolve = function(path){
	var orig = path;
	return orig;
};