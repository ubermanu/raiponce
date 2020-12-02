# Raiponce

> ⚠ This project is a work in progress

This is a paper about how to implement modern and responsive web designs.<br>
It contains a set of techniques, using HTML and CSS, to create fully fluid web pages.

### Design

We need 2 designs, for small and large devices.

### Media queries

A breakpoint should be optional, it breaks the fluidity of the layout.<br>
Instead we use it when the layout drastically changes (eg. navigation bar).

Media queries should detect the device that we are using based on its controls (mouse or touchscreen).

### Sizes

Sizes should interpolate between 2 values.<br>
For this matter we use `clamp` to guess any size between 2 breakpoints.

### Lists

Any lists should be handled with `flex` or `grid`.
