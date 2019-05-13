const objValue = require('../index');
const camelCase = require('../index').camelCase;
const CamelCase = require('../index').CamelCase;
const decamelize = require('../index').decamelize;
const assert = require('power-assert');
describe('test', () => {
  it('参数1空', () => {
    assert.throws(() => {
      objValue();
    }, new TypeError('sourceObje must be an object'))
  });

  it('参数2空', () => {
    let ret = objValue({a:1})
    assert.deepEqual(ret,{a:1})
  });

  it(' 对象方式映射   options is object', () => {
    let ret = objValue({a: 1, b: 2}, {a: String, b: String})
    assert.deepEqual(ret, {a: '1', b: '2'})
  });

  it('sourceObj 不变', () => {
    let sourceObj = {a: 1, b: 2}
    let ret = objValue(sourceObj, {a: String, b: String})
    assert.deepEqual(sourceObj, {a: 1, b: 2})
  });

  it(' 对象方式映射 options 有 sourceObj不存在的key', () => {
    let ret = objValue({a: 1, b: 2}, {a: String, b: String, c: String})
    assert.deepEqual(ret, {a: '1', b: '2'})
  });

  it(' 修改一个key的值', () => {
    let ret = objValue({a: 1, b: 2}, {a: String })
    assert.deepEqual(ret, {a: '1', b: 2})
  });

  it('options 的值不是function， 直接返回该值', () => {
    let ret = objValue({a: 1}, {a: 123})
    assert.deepEqual(ret, {a: 123})
  });

  it('多个key，通过空格分割', () => {
    let ret = objValue({a: 1, b: 1}, {'a b': String})
    assert.deepEqual(ret, {a: '1', b: '1'})
  });

  it('多个key，通过(逗号+空格)分割', () => {
    let ret = objValue({a: 1, b: 1}, {'a, b': String})
    assert.deepEqual(ret, {a: '1', b: '1'})
  });

  it('多个key，通过(逗号+空格)分割', () => {
    let ret = objValue({a: 1, b: 1}, {'a    ,      b': String})
    assert.deepEqual(ret, {a: '1', b: '1'})
  });

  it('多个key，通过(逗号+空格)分割', () => {
    let ret = objValue({a: 1, b: 1}, {'a    ,,,  ,b': String})
    assert.deepEqual(ret, {a: '1', b: '1'})
  });

  it('自定义函数方式', () => {
    let ret = objValue({a: 1, b: 4}, { a: function myFn(value) { return value + 1 } }) 
    assert.deepEqual(ret, {a: 2, b: 4})
  });


})