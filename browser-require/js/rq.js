(function(global){
	var require = function(path){
		var p = require.resolve(path);
		var mod = require.modules[p];
		if(!mod){
			throw new Error('require module is not defined');
		}
		if(!mod.exports){
			mod.exports = {};
			mod.call(mod.exports, mod, mod.exports, require);
		}

		return mod.exports;
	};


	require.resolve = function(path){
		var orig = path;
		return orig;
	};

	require.modules = {};

	if(!global.define){
		global.define = function(id, fn){
			require.modules[id] = fn;
		}
	}
	global.require = require;
	
})(this);


