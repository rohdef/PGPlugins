function PluginName() {
	// Put local variables, etc. here.
}

// Define a function to call your code
// Success and failure is the callback
// function to use in the call.
PluginName.prototype.myPluginCall = function(success, failure, param1, param2) {
	cordova.exec(success, failure, 'PluginName', 'NativeMethodName', [param1, param2]);
}

PluginName.install = function() {
	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.PluginName = new PluginName();
	return window.plugins.PluginName;
}

cordova.addConstructor(PluginName.install);
