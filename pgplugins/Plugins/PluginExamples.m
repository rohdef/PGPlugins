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
    [self writeJavascript:@"cordova.fireDocumentEvent('bastardEvent', {text: 'I\\'ll give you an offer you can\\'t refuse', image: 'DonWheels.gif'})"];
}

@end