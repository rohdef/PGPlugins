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

