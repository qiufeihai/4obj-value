/**
 * 
 * @param {Object} sourceObj 源对象
 * @param {Object} options {key: Function} // options的值必须为function
 */
function objValue(sourceObj, options) {
  if (Object.prototype.toString.call(sourceObj) != '[object Object]') throw new TypeError('sourceObje must be an object');

  let targetObj = Object.assign({}, sourceObj);
  if (!options) return targetObj;
  if (Object.prototype.toString.call(options) == '[object Object]') {
    Object.keys(options).forEach(optsKey => {
      let fn = typeof options[optsKey] == 'function' ? options[optsKey] : () => options[optsKey];
      optsKey.split(/[,\s]+/).forEach(key => {
        if (key in targetObj) {
          targetObj[key] = fn(targetObj[key]);
        }
      })
    })
  }

  return targetObj;
}

module.exports = objValue;
