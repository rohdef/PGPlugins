# Example: 1 - Basic plugin

This plugin is a proof of concept. What is does is send a signal 
to a PhoneGap plugin and send a simple JavaScript alert back 
to the web code.

## Interesting files:
Most of the files are just standard files. In the _www_ folder I have 
made an simple html-file containing a button that runs the 
JavaScript and an div-tag for later responses.

### pgplugins/Cordova.plist
Maps native to JavaScript, so JavaScript can reach the native code. 
The plugins entry is a dictionary containing mappings for plugins. 
The keys is used in JavaScript to reference the plugin (PGPlugins 
in this example), the value identifies which class to execute the 
method in (PluginExamples in this example).

### pgplugins/Plugins/PluginExamples.m and pgplugins/Plugins/PluginExamples.h
Is almost a normal Objective C class. It has to extend CDVPlugin 
Here you define the methods that you want to call from JavaScript. 
Only 'special' thing is that the methods has to be named:

    yourMethodName:(NSMustableArray*)arguements withDict:(NSMutableDictionary*)options

The dictionary is a legacy from older version of PhoneGap, but it 
still has to be there.

### www/pluginExample.js
This file calls the plugin using the mapping from _Cordova.plist_.

## Navigation
[Next: 2 Simple callback](https://github.com/rohdef/PGPlugins/tree/2_Simple_callback)

[List of examples](https://github.com/rohdef/PGPlugins/)
