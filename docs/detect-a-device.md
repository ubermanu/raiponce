# Detect a device

To detect a device, we can track its input type using media queries v4.<br>

### Mixins

These mixins are part of the `raiponce` package available on NPM.

#### Detect touchscreen

Can detect a smartphone or a tablet.

```scss
use-touchscreen()
```

#### Detect stylus

Can detect a touch device with stylus support.

```scss
use-stylus()
```

#### Detect a game device

Can detect a Nintendo Wii or a Microsoft Kinect.

```scss
use-game-pointer()
```

#### Detect mouse

Can detect laptop or desktop environments.

```scss
use-mouse()
```

### Example

```scss
@use 'raiponce';

@include raiponce.use-mouse() {
  button:hover {
    background: burlywood;
  }
}
```

### Sources

* https://medium.com/@ferie/detect-a-touch-device-with-only-css-9f8e30fa1134
