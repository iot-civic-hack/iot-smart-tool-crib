/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
  // Loading JavaScript code
#if DEBUG
  // For Debug build load from development server. Start the server from the repository root:
  //
  // $ npm start
#if TARGET_IPHONE_SIMULATOR
  // Run from locally running dev server
  jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle"];
#else
  // Run on device with code coming from dev server on PC (change the IP to your PCs IP)
  jsCodeLocation = [NSURL URLWithString:@"http://172.16.104.214:8081/index.ios.bundle"];
#endif
#else
  // For production load from pre-bundled file on disk. To re-generate the static bundle, run
  //
  // $ curl http://localhost:8081/index.ios.bundle -o main.jsbundle
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
  
//  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"SmartLocker"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
