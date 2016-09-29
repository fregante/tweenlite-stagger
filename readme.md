# Deprecated

### No need for this module.
### Use `new TimelineLite().staggerFrom(…)` instead of `TweenLite.staggerFrom(…)`

# tweenlite-stagger

> Avoid TweenMax. Use TweenLite.stagger with the help of TimelineLite

[![gzipped size](https://badges.herokuapp.com/size/github/bfred-it/tweenlite-stagger/master/dist/tweenlite-stagger.browser.js?gzip=true&label=gzipped%20size)](#readme)
[![Travis build status](https://api.travis-ci.org/bfred-it/tweenlite-stagger.svg?branch=master)](https://travis-ci.org/bfred-it/tweenlite-stagger)
[![gzipped size](https://img.shields.io/npm/v/tweenlite-stagger.svg)](https://www.npmjs.com/package/tweenlite-stagger) 

**Public service announcement:** You don't need TweenMax to stagger! You can just use TweenLite and TimelineLite.

This extremely small package links `TimelineLite`'s stagger methods to `TweenLite` and lets you use them directly.

**Note:** You only need this if you're filesize conscious and don't want to load TweenMax.

## Install

```sh
npm install --save tweenlite-stagger
```

```js
import 'gsap/src/uncompressed/TweenLite.js';
import 'gsap/src/uncompressed/TimelineLite.js';
import 'tweenlite-stagger';
```

Or:

```html
<script src="http://yourcdn.com/TweenLite.js"></script>
<script src="http://yourcdn.com/TimelineLite.js"></script>
<script src="dist/tweenlite-stagger.browser.js"></script>
```

## Usage

```js
TweenLite.staggerTo('p', 1, {opacity: 0}, 0.2);

TweenLite.staggerFrom('p', 1, {y: 10}, 0.2);

TweenLite.staggerFromTo('p', 1, {x: 10}, {x: 100}, 0.2);
```

## Dependencies

TweenLite and TimelineLite, of course. You need to load it separately.

## Related

* [gsap-then](https://github.com/bfred-it/gsap-then): Make every GSAP Tween a promise. `tl.then(doSomething);`

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
