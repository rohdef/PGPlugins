function runPlugin() {
  cordova.exec(
    null,               // Success callback
    null,               // Error callback
    "PGPlugins",        // Plugin name
                        // named in Cordova.plist
    "mySimplePlugin",   // Method name
    []                  // Arguments
    );
};

function eventHandler(data) {
  var div = document.getElementById('response');
  div.innerHTML = '<p>' + data.text + '</p>'
    + '<img src="' + data.image + '">';
}

document.addEventListener(
  'bastardEvent',
  eventHandler,
  true);

