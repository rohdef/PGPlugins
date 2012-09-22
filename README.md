# Example: 4 - Events

Sends an event to JavaScript using normal JavaScript handlers.

## Interesting files:

### pgplugins/Plugins/PluginExamples.m and pgplugins/Plugins/PluginExamples.h
Writes to a JavaScript `document.addEventListener`. The callback is 
made using cordova's nice helper `cordova.fireDocumentEvent`, there's 
also one for window events: `cordova.fireWindowEvent`.

### www/pluginExample.js
Just standard JavaScript.

## Navigation
[Next: 5 Event with arguments](https://github.com/rohdef/PGPlugins/tree/5_Event_With_Arguments)

[List of examples](https://github.com/rohdef/PGPlugins/)

[Previous: 3 Arguments](https://github.com/rohdef/PGPlugins/tree/3_Arguments)
