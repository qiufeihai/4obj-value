# ovj-val

> 转换一个对象的value值，源对象不变


## Install

```
$ npm install ovj-val
```


## Usage

```js
const objValue = require('ovj-val');

objValue({a: 1}, {a: String}) // 对象方式映射
//=> {a: '1'}

objValue({a: 1, b: 1}, {'a b': String}) // 多个key，通过空格分割
//=> {a: '1', b: '1'}

objValue({a: 1}, { a: function myFn(value) { return value + 1 } }) // 自定义函数方式
//=> {a: 2}

objValue({a: 1, b: 1}, {'a, b': String}) // 多个key，通过(逗号+空格)分割
//=> {a: '1', b: '1'}

objValue({a: 1, b: 1}, {'a    ,    b': String}) // 多个key，通过(逗号+空格)分割
//=> {a: '1', b: '1'}

objValue({a: 1, b: 1}, {'a  ,,  ,    b': String}) // 多个key，通过(逗号+空格)分割
//=> {a: '1', b: '1'}



```


## API

### objValue(sourceObj, options)

#### sourceObj

Type: `Object`

#### options

Type: `Object`
