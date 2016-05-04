% Custom Keyboard Shortcuts to Dynamic Menu Items

Here, I outline a method for adding a keyboard shortcut to menu items with dynamic names in Mac OS X. Custom keyboard shortcuts on the Mac are generally great, and you can create your own system-wide, or application-specific shortcuts in the keyboard preference pane. All you need to do is provide the <strong>precise</strong> name of the menu item you want to make a shortcut to.  Instructions for how to do this can be found at <a href="http://lifehacker.com/343328/create-a-keyboard-shortcut-for-any-menu-action-in-any-program">lifehacker</a>. But it's a problem if the menu item changes dynamically.

<figure><img src="http://static1.squarespace.com/static/53e976eae4b0162bed56938c/53e9780ce4b0b27e29a5e76d/542ad7fae4b0a22273e88586/1412093949466/640xNxVersions-1.png.pagespeed.ic.PNTaY-CNqQ.png.pagespeed.ic.PNTaY-CNqQ.png?format=original" alt=""/></figure>

<p>I’ve been using <a href="http://versionsapp.com/">Versions</a> as a svn client for a couple of weeks to help manage my writing, and so far it’s proven to be a great app. But in managing LaTeX projects, there are a lot of files that should to be ignored by the repository. Unfortunately, Versions doesn’t have a keyboard shortcut for ignoring a selected file. To make matters worse, the name of the menu item changes to reflect the selected file, so making a keyboard shortcut in the usual way doesn’t work.</p>

<figure><img src="http://static1.squarespace.com/static/53e976eae4b0162bed56938c/53e9780ce4b0b27e29a5e76d/542ada2ae4b0a7559059244b/1412094514084//img.png" width=""/></figure>


<p>I guess this wouldn’t be so bad if I weren’t a keyboard junkie. But, here’s how I worked around it… Open Automator, and choose the “Service” template for the new Automator action.</p>

<figure><img src="http://static1.squarespace.com/static/53e976eae4b0162bed56938c/53e9780ce4b0b27e29a5e76d/542ada77e4b01ed269cdde73/1412094584438//img.png" alt=""/></figure>


<p>Tell the service to take no input, and to only work in the App you want to make a shortcut for.</p>

<figure><img src="http://static1.squarespace.com/static/53e976eae4b0162bed56938c/53e9780ce4b0b27e29a5e76d/542ada9ce4b064f96f8d4d7b/1412094620350//img.png" alt=""/>
</figure>

<p>Add an applescript block to the workflow. Here’s where we’re going to activate the menu item. In Versions, the menu item I wanted to access always begins with the word “Ignore”. For this particular trick to work, your target menu item needs to have at least one stable identifying string in its name. The code also needs to describe where in the menu hierarchy your menu-item of interest is found. Here’s the code for getting at the Ignore command in Versions:</p>

```applescript
on run {input, parameters}
  tell application “System Events”
    tell process “Versions”
      set menuList to name of every menu item of menu “Action” of menu bar 1
      repeat with itemName in menuList
        if itemName contains “Ignore” then
          click menu item itemName of menu “Action” of menu bar 1
          return
        end if
      end repeat
    end tell
  end tell
end run
```

<p>Upon saving, the workflow should save itself to <code>~/Library/Services</code> and should now be available as a service in your target application.</p>

<p>Now, back in the keyboard preferences, your new service should be available in the list of services, and you can assign whatever keyboard shortcut you like!</p>

<figure><img src="http://static1.squarespace.com/static/53e976eae4b0162bed56938c/53e9780ce4b0b27e29a5e76d/542adaefe4b0b2c049a96b28/1412094707395//img.png" alt=""/>
</figure>
