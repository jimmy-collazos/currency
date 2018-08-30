const Currency = require('./currency')

const assert = (value, result, expected) => console.assert(result === expected, `${value} -> (${expected} === ${result})`)

const tests = [
  [ 1                , '1'        , ''       , false,  1],
  [ 0                , '0'        , ''       , false,  0],
  [-1                , '1'        , ''       , true , -1],
  [ 0.1              , '0'        , '1'      , false,  1],
  [ 0.0              , '0'        , ''       , false,  0],
  [-0.1              , '0'        , '1'      , true , -1],
  [ 123456789.9876543, '123456789', '9876543', false,  1],
  [-123456789.9876543, '123456789', '9876543', true , -1],
  [-987654321.1234567, '987654321', '1234567', true , -1]
]

tests.forEach(([assert_value, integer, decimal, isNegative, sign]) => {
  let currency = Currency(assert_value)
  
  assert(assert_value, currency.integer, integer)
  assert(assert_value, currency.decimal, decimal, currency)
  assert(assert_value, currency.isNegative, isNegative)
  assert(assert_value, currency.sign, sign)
  assert(assert_value, currency.value, assert_value)
})