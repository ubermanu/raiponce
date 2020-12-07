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

### Checkup

You can track the support for your current device below:

<ul>
  <li class="use use-touchscreen">
    <span>Smartphone, touchscreen</span>
  </li>
  <li class="use use-stylus">
    <span>Stylus based screen</span>
  </li>
  <li class="use use-game-controller">
    <span>Nintendo Wii controller, Microsoft Kinect</span>
  </li>
  <li class="use use-mouse">
    <span>Mouse, touchpad</span>
  </li>
</ul>

<v-style>
    .use {
        color: firebrick;
        font-family: "Droid Sans", sans-serif;
    }
    @media (hover: none) and (pointer: coarse) {
        .use-touchscreen {
            color: forestgreen;
        }
    }
    @media (hover: none) and (pointer: fine) {
        .use-stylus {
            color: forestgreen;
        }
    }
    @media (hover: hover) and (pointer: coarse) {
        .use-game-controller {
            color: forestgreen;
        }
    }
    @media (hover: hover) and (pointer: fine) {
        .use-mouse {
            color: forestgreen;
        }
    }
</v-style>

### Sources

* https://medium.com/@ferie/detect-a-touch-device-with-only-css-9f8e30fa1134
