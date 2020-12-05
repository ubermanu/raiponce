![](media/icons8-princess-48.png?raw=true "")

# Raiponce

The repo contains a set of functions and utils for SASS.<br>
Plus, a documentation is available with some good practices.

### Install

    yarn add raiponce

In your scss file (with module resolver):

    @use 'raiponce';

### Getting started

This quick example showcases a fluid font size from 12px to 24px.

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

### Run tests

Tests are made using sass-true.<br>
You can clone this repo and run:

    yarn test

### Preview

You can run locally the preview web server with some examples:

    yarn preview
