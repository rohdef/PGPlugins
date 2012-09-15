# Example: 2 - Simple callback

This shows how to do a basic callback in PhoneGap.

## Interesting files:

### pgplugins/Plugins/PluginExamples.m and pgplugins/Plugins/PluginExamples.h
Reads the first argument, which is a callback id that PhoneGap 
generates. This used to tell PhoneGap what function to call 
later on.

Use the `doSuccess` boolean to try the success and error 
callbacks.

The `CDVPluginResult` class from the cordova api is used to 
generate the callback, specifying the status and result data.

### www/pluginExample.js
Not much to say. Creates too functions and send them to the 
`cordova.exec` call, so they can be used from the native code.
