# Linear scaling of sizes (eg. font-size)

In this example, we will asume we have 2 designs.<br>
One for mobile, which has a width of 768px.<br>
One for desktop, which has a width of 1920px.

At 768, buttons have a font size of `12px` and at 1920 it's `24px`.<br>
Using linear interpolation, we can handle in-between font sizes without using breakpoints.

You can check the `raiponce` package which contains the `clamp()` function.

### Example

```scss
/* styles.scss */
p {
  font-size: raiponce.clamp((768px: 12px, 1920px: 24px));
}
```

```css
/* output.css */
p {
  font-size: clamp(12px, 1.0416666667vw + 4px, 24px);
}
```

### Links

* https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
* https://putaindecode.io/articles/une-ui-responsive-grace-a-la-regle-de-trois
