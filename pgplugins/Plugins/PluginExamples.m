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
    NSString *bastardCallbackId = [arguments objectAtIndex:1];
    [self writeJavascript:[NSString stringWithFormat:@"bastard.runCallback('%@');", bastardCallbackId]];
}

@end