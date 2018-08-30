const Currency = require('./currency')

const _assert = (value, result, expected) => console.assert(result === expected, `${value} -> (${expected} === ${result})`)
const assert = (value, result, expected) => _assert(JSON.stringify(value), JSON.stringify(result), JSON.stringify(expected))

const tests = [
  [ 1                , ['1']        , ''       , false,  1],
  [ 0                , ['0']        , ''       , false,  0],
  [-1                , ['1']        , ''       , true , -1],
  [ 0.1              , ['0']        , '1'      , false,  1],
  [ 0.0              , ['0']        , ''       , false,  0],
  [-0.1              , ['0']        , '1'      , true , -1],
  [ 123456789.9876543, ['123','456','789'], '9876543', false,  1],
  [-123456789.9876543, ['123','456','789'], '9876543', true , -1],
  [-987654321.1234567, ['987','654','321'], '1234567', true , -1]
]

tests.forEach(([assert_value, integer, decimal, isNegative, sign]) => {
  let currency = Currency(assert_value)

  assert(assert_value, currency.integer, integer)
  assert(assert_value, currency.decimal, decimal, currency)
  assert(assert_value, currency.isNegative, isNegative)
  assert(assert_value, currency.sign, sign)
  assert(assert_value, currency.value, assert_value)
})