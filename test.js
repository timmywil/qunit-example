import { add } from './src/add.js'

QUnit.module('add')

QUnit.test('two numbers', (assert) => {
  assert.equal(add(1, 2), 3)
})
