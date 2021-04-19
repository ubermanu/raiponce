# Linear scaling (eg. font-size)

Sizes should interpolate between 2 values.<br>
For this matter we use `clamp` to guess any size between 2 breakpoints.

### Example

In this example, we will assume we have 2 designs.<br>
- One for mobile, which has a width of 768px.<br>
- One for desktop, which has a width of 1920px.

At 768, buttons have a font size of `12px` and at 1920 it's `24px`.<br>
Using linear interpolation, we can handle in-between font sizes without using breakpoints.

You can check the `raiponce` package which contains the `lerp()` function.<br>
**Note**: The styles have to be mobile-first.

```scss
/* styles.scss */
p {
  font-size: raiponce.lerp((768px: 12px, 1920px: 24px));
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
