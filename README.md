# Example: 4 - Events

Sends an event to JavaScript using normal JavaScript handlers.

## Interesting files:

### pgplugins/Plugins/PluginExamples.m and pgplugins/Plugins/PluginExamples.h
Writes to a JavaScript `document.addEventListener`. The callback is 
made using cordova's nice helper `cordova.fireDocumentEvent`, there's 
also one for window events: `cordova.fireWindowEvent`.

### www/pluginExample.js
Just standard JavaScript.
