# Linear scaling of sizes (eg. font-size)

In this example, we will asume we have 2 designs.<br>
One for mobile, which has a width of 768px.<br>
One for desktop, which has a width of 1920px.

At 768, buttons have a font size of `1rem` and at 1920 it's `1.6rem`.<br>
Using linear interpolation, we can handle in-between font sizes without using breakpoints.

You can check the package `@raiponce/size` which contains the `clamp()` function.

### Links

* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
* https://putaindecode.io/articles/une-ui-responsive-grace-a-la-regle-de-trois
