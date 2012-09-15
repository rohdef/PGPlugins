// Simple object containing an object for callbacks
var bastard = {};
bastard._callbacks = {};

// Function to run a callback
bastard.runCallback = function(id) {
  this._callbacks[id].call();
};

// Add the callback to the callbacks map for later execution
bastard.runWithCallback = function(callback) {
  var id = 'foo'; // Should be some id generator
  this._callbacks[id] = callback;
  
  cordova.exec(
    null,               // Success callback
    null,               // Error callback
    "PGPlugins",        // Plugin name
                        // named in Cordova.plist
    "mySimplePlugin",   // Method name
    [ id ]              // Arguments
    );
};

function runPlugin() {
  var firstCallback = function() {
    var div = document.getElementById('response');
    div.innerHTML = '<p>Hellooo</p>';
  };

  bastard.runWithCallback(firstCallback);
};