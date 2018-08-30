const _isNegative = (x) => (x < 0)
const _decimal = (x) => (x).toString().split('.')[1] || ''
const _sign = (x) => ((x > 0) - (x < 0)) || +x // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
const _integer = (x) => Math.floor(Math.abs(x)).toString()

module.exports = function Currency(x) {
  return {
    integer: _integer(x),
    decimal: _decimal(x),
    isNegative: _isNegative(x),
    sign: _sign(x),
    value: x
  }
}