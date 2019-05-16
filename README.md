# @a-la/fixture-babel

[![npm version](https://badge.fury.io/js/%40a-la%2Ffixture-babel.svg)](https://npmjs.org/package/@a-la/fixture-babel)

`@a-la/fixture-babel` is source code transpiled with _Babel_.

```sh
yarn add -E @a-la/fixture-babel
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`erte()`](#erte-void)
- [`c()`](#c-void)
- [`b()`](#b-void)
- [Transpiled Source Code](#transpiled-source-code)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default and named functions:

```js
import erte, { c, b } from '@a-la/fixture-babel'
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `erte(): void`

Returns `erte`.

```js
/* yarn example/ */
import fixtureBabel from '@a-la/fixture-babel'

(async () => {
  const res = await fixtureBabel({
    text: 'example',
  })
  console.log(res)
})()
```
```
erte
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/2.svg?sanitize=true"></a></p>

## `c(): void`

Returns `c`.

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/3.svg?sanitize=true"></a></p>

## `b(): void`

Returns `b`.

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/4.svg?sanitize=true"></a></p>

## Transpiled Source Code

This is how Babel transpiles [source code](src/class.js):

```js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.b = exports.c = exports.default = void 0;

var _stream = _interopRequireWildcard(require("stream"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class S extends _stream.default {
  /**
   * Creates a new instance.
   * @param {string} path
   */
  constructor(path) {
    super();
    console.log((0, _stream.join)('hello', path));
  }

}
/**
 * A function that returns `c`.
 * @param {string} input
 */


exports.default = S;

const c = (input = '') => {
  return 'c' + input ? `-${input}` : '';
};
/**
 * A function that returns `b`.
 * @param {number} times
 */


exports.c = c;

const b = (times = 0) => {
  return 'b' + times ? `-${times}` : '';
};

exports.b = b;
```

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/5.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://alamode.cc">À La Mode</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src="/.documentary/section-breaks/-1.svg?sanitize=true"></a></p>