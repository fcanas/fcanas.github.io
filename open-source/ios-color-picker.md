% iOS Color Picker

<a href="https://github.com/fcanas/ios-color-picker" target="_blank" class="social-github"></a>

A reusable color picker component for iOS. Works for iPhone, iPad, in modal sheets, popovers... just about anywhere.

# Using iOS-Color-Picker

## Installation

The easiest way to use iOS-Color-Picker is with [CocoaPods][0]. Add the following line to your `Podfile`.


<pre>pod 'iOS-Color-Picker'
</pre>

## Using a Color Picker from a View Controller

Suppose you have a view controller with a `color` property you'd like to let the user pick. Make your view controller implement the `FCColorPickerViewControllerDelegate` protocol. Handle the color picked and the cancelled methods, and make a method that triggers showing the view controller.


<pre>-(IBAction)chooseColor:(id)sender {
  FCColorPickerViewController *colorPicker = [FCColorPickerViewController colorPicker];
  colorPicker.color = self.color;
  colorPicker.delegate = self;

  [colorPicker setModalPresentationStyle:UIModalPresentationFormSheet];
  [self presentViewController:colorPicker animated:YES completion:nil];
}

#pragma mark - FCColorPickerViewControllerDelegate Methods

-(void)colorPickerViewController:(FCColorPickerViewController *)colorPicker didSelectColor:(UIColor *)color {
  self.color = color;
  [self dismissViewControllerAnimated:YES completion:nil];
}

-(void)colorPickerViewControllerDidCancel:(FCColorPickerViewController *)colorPicker {
  [self dismissViewControllerAnimated:YES completion:nil];
}
</pre>

# Example Project

[iOS Color Picker Example][1]

[0]: http://cocoapods.org
[1]: https://github.com/fcanas/ios-color-picker-example
