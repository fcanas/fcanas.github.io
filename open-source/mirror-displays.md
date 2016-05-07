% Mirror Displays

## Download
* [Mirror Displays App](https://github.com/fcanas/mirror-displays/releases/download/1.0/MirrorDisplays.zip)
* [Command Line](https://github.com/fcanas/mirror-displays/releases/download/1.0/MirrorTool.zip)

It takes too many steps in Mac OS X to switch between mirrored and extended desktop mode on external displays. Open System Preferences, go to the display pane, go to the Arrangement tab, and toggle the Mirror Displays checkbox. It’s a dance seen all too often before presentations when PowerPoint or Keynote are showing the presentation on the laptop screen instead of the projector.

Apple used to have the courtesy to give laptops a dedicated key to toggle display mirroring. That has been replaced with the under-documented Command-F1 in newer Apple laptops, but leaves Desktop machines and hacked laptops in the cold. And there’s still no easy way to change the mirroring settings from the command line, or any way at all if you can’t see what’s on the screen.

## The App

I wrote a simple application to toggle between mirrored and extended desktop modes for the mac. It's the easiest way to turn on, or turn off mirroring displays on a Mac. You can put it in your dock for an easy-access switch, or activate it with Quicksilver, Quick Search Box or Spotlight. When you run it, it will bounce in the doc once or twice and change the display mirroring settings. There is no user interface, and only makes the change in settings if an external monitor is attached.

What the program won’t do is fix or enable mirroring on a hacked computer where a secondary display only works in one mode or the other. It also will not magically make an external monitor work if the computer doesn’t recognize it when it’s plugged in. You can use it to switch from your broken mirrored mode to the functional extended mode.

## The Command line Tool

The command line tool is good for giving shell-scripts the power to control display mirroring and opens up the possibility of controlling mirroring remotely over ssh. In addition to the default toggle mode, it can turn mirroring on or off regardless of what the current state of mirroring is, and can report the current mirroring status without changing anything.

```
usage: mirror [option]    Passing more than one option produces undefined behavior.
  -h            Print this usage and exit.
  -t            Toggle mirroring (default behavior)
  -on            Turn Mirroring On
  -off            Turn Mirroring Off
  -q            Query the Mirroring state and print "on" or "off" to stdout
This is just about everything you might want to be able to control regarding mirroring displays from the command line!
```

### Note to Hackintosh Users

This is program is essential if you run OS X on an MSI Wind, Dell Mini, and a few other hacked netbooks as it helps get around a screen corruption issue when plugging in an external display. Mirror Displays will not enable mirroring if mirroring is broken on your netbook. What it will do is allow you to easily toggle out of mirrored mode and into extended desktop mode without needing to see what you’re doing.