//
//  PluginExamples.h
//  pgplugins
//
//  Created by Rohde Fischer on 9/11/12.
//
//

#import <Cordova/CDVPlugin.h>

@interface PluginExamples : CDVPlugin

-(void) mySimplePlugin:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;

@end
