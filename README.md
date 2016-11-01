# scrollAnimationjs

Reveal CSS animation as you scroll down a page.
It use [animate.css](https://github.com/daneden/animate.css) animations.

### [LIVE DEMO ➫](http://kreont.com/)

## Version

1.0.0 Alpha

## License

### MIT license

## Documentation

### Dependencies
- [animate.css](https://github.com/daneden/animate.css)

### Installation


- NPM

```bash
   npm install https://github.com/spaul81/scrollAnimation.git
```

### Usage

- HTML

```html
  <section class="is-animated slideInLeft" animation-delay=".1s"></section>
  <section class="is-animated slideInRight"></section>
```

- JavaScript

```javascript
$('.is-animated').scrollAnimation({
    // Options
        animationDelay: ".0s"
    });
```

