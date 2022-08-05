# Raiponce

Raiponce is a framework for easier responsive designs.<br>
It's available for **JS** and **SASS**.

## Install

You can install raiponce with your favorite package manager.<br>
This is not necessary for the following article though.

    npm install raiponce

> Once you are set up, we can start rambling about web design!

## Avoid breakpoints

We never know what kind of device will be invented in the future.<br>
We need to avoid breakpoints to prevent unexpected behavior.

But we need a method to make our integration as smooth as possible...

> In the following sections, we will focus on the following scenario:<br>
> We have 2 designs, one for **desktop** (1920px) and one for **mobile** (768px).

## Linear scaling

The following example, showcases a `h1` title:

```css
h1 {
    font-size: 12px;

    @media (min-width: 1920px) {
        font-size: 24px;
    }
}
```

To add more responsiveness without breaking the design, we can use interpolation to predict the font-size of the title
in-between the two major breakpoints.

```css
@import 'raiponce';

h1 {
    font-size: raiponce.lerp((768px: 12px, 1920px: 24px));
}
```

The following result is expected:

```css
h1 {
    font-size: clamp(12px, 1.0416666667vw + 4px, 24px);
}
```

> Sometimes you need to know more about the device of the user, for example to add some controls on carousel or display a different image.<br>
> To avoid using breakpoints there are several techniques to detect a device.

## Detect a device

To detect a device, we can track its input type using media queries v4.<br>
The following SCSS mixins are part of the `raiponce` package available on NPM.

### Detect touchscreen

Can detect a smartphone or a tablet.

```css
@include raiponce.use-touchscreen() {
    // Uses a touchscreen 📱
}
```

### Detect stylus

Can detect a touch device with stylus support.

```css
@include raiponce.use-stylus() {
    // Uses a stylus 🖊
}
```

### Detect a game device

Can detect a Nintendo Wii or a Microsoft Kinect.

```css
@include raiponce.use-game-pointer() {
    // Uses a game device 🎮
}
```

### Detect mouse

Can detect laptop or desktop environments.

```css
@include raiponce.use-mouse() {
    // Uses a mouse 🖱
}
```

## The picture element

TODO

## Grids

Grids have been a pain since the beginning of the web era.<br>
Going from tables to flexbox, it has been a long road.

But nowadays the `display: grid` rule is the way to go!<br>
We can even define our own grids with `grid-template-columns` and `grid-template-rows`.

```css
.grid {
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 1920px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
}
```

But, remember, we should avoid breakpoints as much as possible.<br>
A now known solution is to use minmax to autofill the grid as much as possible:

```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

## Sources

- https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/
- https://putaindecode.io/articles/une-ui-responsive-grace-a-la-regle-de-trois 🇫🇷
- https://medium.com/@ferie/detect-a-touch-device-with-only-css-9f8e30fa1134
