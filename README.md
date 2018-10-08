# @a-la/fixture-babel

[![npm version](https://badge.fury.io/js/@a-la/fixture-babel.svg)](https://npmjs.org/package/@a-la/fixture-babel)

`@a-la/fixture-babel` is Source code transpiled with babel.

```sh
yarn add -E @a-la/fixture-babel
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`fixtureBabel(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import fixtureBabel from '@a-la/fixture-babel'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `fixtureBabel(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name    |   Type    |    Description    | Default |
| --------- | --------- | ----------------- | ------- |
| shouldRun | _boolean_ | A boolean option. | `true`  |
| __text*__ | _string_  | A text to return. | -       |

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
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [À La Mode][1] 2018

[1]: https://alamode.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>