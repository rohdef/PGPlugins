/*
 <filmaj> rohdef: no, can't pass function as argument, as there is no equivalent in native land
 <filmaj> how about have your plugin keep a dictionary (object) of functions, with an ID referencing the function
 <filmaj> on the javascript side
 <filmaj> so like var callbacks = {}; and when a  call to your plugin JS comes in
 <filmaj> create an id (var id = createSomeid();)
 <filmaj> and then callbacks[id] = function() { alert('my callback'); }
 <filmaj> thats essentially how the success and error callback mechanism works
 <filmaj> then you pass the ID as an argument into exec
 <filmaj> and can pass it back to JS when you need to

 */

function PGPlugins() {
	this.callbacks = [];
}

PGPlugins.prototype.mySimplePlugin = function()
{
  return cordova.exec(null, null, "PGPlugins", "mySimplePlugin", []);
};

PGPlugins.install = function() {
	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.PGPlugins = new PGPlugins();
	return window.plugins.PGPlugins;
};

cordova.addConstructor(PGPlugins.install);