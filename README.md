# Raiponce

The repo contains a set of functions and utils for SASS.<br>
Plus, a documentation is available with some good practices.

### Install

    npm install raiponce

In your scss file (with module resolver):

```scss
@use 'raiponce';
```

### Getting started

This quick example showcases a fluid font size from 12px to 24px.

```scss
/* input.scss */
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

### Run tests

Tests are made using sass-true.<br>
You can clone this repo and run:

    pnpm test

### Preview

You can run locally the preview web server with some examples:

    pnpm preview
