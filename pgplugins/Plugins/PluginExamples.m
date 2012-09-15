//
//  PluginExamples.m
//  pgplugins
//
//  Created by Rohde Fischer on 9/11/12.
//
//

#import "PluginExamples.h"

@implementation PluginExamples

-(void) mySimplePlugin:(NSMutableArray*)arguments
            withDict:(NSMutableDictionary*)options
{
    // First argument always contains callback id that PhoneGap generates
    NSString *callback = [arguments pop];
    NSString *resultScript;
    
    // YES for a success callback, NO for an error
    bool doSuccess = YES;
    
    if (doSuccess) {
        // Creates a simple success response and put the JavaScript in resultScript
        CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:@"It works :)"];
        resultScript = [result toSuccessCallbackString:callback];
    } else {
        // Creates a simple error response and put the JavaScript in resultScript
        CDVPluginResult *result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"I vote for natural selection."];
        resultScript = [result toErrorCallbackString:callback];
    }
    
    [self writeJavascript:resultScript];
}

@end