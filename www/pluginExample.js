function runPlugin() {
  
  // Writes an error message to the div with a little image.
  var error = function(message) {
    var div = document.getElementById('response');
    div.innerHTML = '<p>Error: ' + message + '</p>'
                  + '<img src="./error.jpg">';
  };
  
  // Writes a success message to the div.
  var success = function(message) {
    var div = document.getElementById('response');
    div.innerHTML = '<p>Success: ' + message + '</p>';
  };
  
  cordova.exec(
    success,            // Success callback
    error,              // Error callback
    "PGPlugins",        // Plugin name
                        // named in Cordova.plist
    "mySimplePlugin",   // Method name
    []                  // Arguments
    );
};

