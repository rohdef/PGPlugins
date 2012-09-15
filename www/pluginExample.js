function runPlugin() {
  cordova.exec(
    null,               // Success callback
    null,               // Error callback
    "PGPlugins",        // Plugin name
                        // named in Cordova.plist
    "mySimplePlugin",   // Method name
    []                 // Arguments
    );
};

function eventHandler() {
  var div = document.getElementById('response');
  div.innerHTML = '<p>Bastard event recieved</p>';
}

document.addEventListener(
  'bastardEvent',
  eventHandler,
  true);

