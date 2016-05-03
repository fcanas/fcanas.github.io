% Keeping Private API Keys Private
% 2014-09-01

I [used to](https://github.com/fcanas/DropPin/tree/c0126916482866c335f85bef87d28ca7124ee6d4) keep sensitive iOS project information in a `.gitignore`d plist like [Mike Walker](http://blog.lazerwalker.com/blog/2014/05/14/handling-private-api-keys-in-open-source-ios-apps/). Now I keep secrets in a few different `.gitignore`d xcconfig files. It turns out that xcconfig files let me flexibly configure build targets for different environments. I now use this approach in closed-source projects as well.

## xcconfig

An open source iOS app I have in progress shows how I do it now: [https://github.com/fcanas/HabitForming](https://github.com/fcanas/HabitForming).

There is a `Keys.example.xcconfig` in the repository. The README has instructions to copy its contents into `Keys.xcconfig` and replace the IDs and keys with appropriate values. The real key files are in the repository's `.gitignore` file.

```
PARSE_APPLICATION_ID = YOUR_ID_HERE
PARSE_CLIENT_KEY = YOUR_KEY_HERE
FACEBOOK_APPLICATION_ID = YOUR_ID_HERE
```

The Xcode project doesn't need a direct reference to the `Keys.xcconfig` files. The project instead has references to environment config files like this one:

```
#include "Keys.xcconfig"
GCC_PREPROCESSOR_DEFINITIONS = $(inherited) PARSE_APPLICATION_ID=@\"$(PARSE_APPLICATION_ID)\" PARSE_CLIENT_KEY=@\"$(PARSE_CLIENT_KEY)\" FACEBOOK_APPLICATION_ID=@\"$(FACEBOOK_APPLICATION_ID)\"
```

The `#include` directive will find xcconfig files in the directory without the Xcode project needing a reference to it, meaning your project isn't ever in an inconsistent state on initial check-out. The second line makes all the values available as preprocessor symbols.

With this approach, you can keep a different Keys file for different environments (_e.g._ `Dev-Keys.xcconfig`, `Stage-Keys.xcconfig`, `Prod-Keys.xcconfig`) and tie them to different build configurations: `Dev-Config.xcconfig`, `Config.xcconfig`. You can then put any information that isn't sensitive in these configuration files.

You'll need to configure your project's build settings to use the configurations files like so:

![](http://static1.squarespace.com/static/53e976eae4b0162bed56938c/53e9780ce4b0b27e29a5e76d/54050699e4b0f72d40bb93e4/1409615514203//img.png)

## Configuring a Target

There's a great additional advantage to having values as preprocessor directives. They're available as symbols in you app's plist, meaning you can create URL scheme handlers like `fb${FACEBOOK_APPLICATION_ID}` and they'll always be configured correctly for your environment (incredibly useful for Facebook sign-in in development and production environments).

![](http://static1.squarespace.com/static/53e976eae4b0162bed56938c/53e9780ce4b0b27e29a5e76d/5404ff68e4b0a7034afd83d9/1409613672966//img.png)

You can also keep separate bundle identifiers for the same target (useful for things like Enterprise distribution, and separate installs on the same phone from the same target). You can also configure product names, or anything else.

All without maintaining multiple targets.

## Recap

Use xcconfig files to manage service keys, app IDs, service endpoints, or anything else for different environments.

And reap the rewards.

1. Manage different values for different environments
2. Keep .gitignored files for keys out of Xcode
3. Extensive opportunity for configuring targets with configuration files
