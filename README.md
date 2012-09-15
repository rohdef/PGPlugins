# Example: 6 - Callback
This is a bit more complex. PhoneGap can't send functions 
from JavaScript to native. Therefore I create an dictionary 
of callbacks in JavaScript, and pass the key as argument to 
the native part. Later the native code can execute callback 
addressing it using this key.

## Interesting files:

### pgplugins/Plugins/PluginExamples.m and pgplugins/Plugins/PluginExamples.h
Calls a JavaScript function using the passed argument. 
This in turn accesses the callback dictionary and execute 
the stored callback.

### www/pluginExample.js
Even though this is the most complex of the JavaScript in 
these examples, it's still _just_ standard JavaScript.

This creates an object with an dictionary to callbacks. 
And two methods, one for executing stored callbacks, and 
one to add a callback and execute the plugin with the 
callback id. Note that the id should probably be generated 
in the real use.
