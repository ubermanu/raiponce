# Detect a device

To detect a device, we can track its input type using media queries v4.<br>
You can checkout the package `@raiponce/device` for more info.

### Test

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
