# Items grid

Image you have a huge product grid with 6x4 products.<br>
Instead of setting up a different amount to show for multiple breakpoints,<br>
we can use the `auto-fill` feature of CSS grids.

```css
grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
```

It will fill the grid with items of 10rem width minimum.

### Links

* https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/
* https://putaindecode.io/articles/responsive-sans-media-queries
