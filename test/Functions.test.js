import test from 'ava'
import {
  Step,
  Sign,
  SymmetricalRamp,
} from './../src/index.js'

test('Step function', t => {

  t.is(typeof Step, 'function', 'Step is a function')
  t.is(Step(.0001), 1, 'Should return 1')
  t.is(Step(99), 1, 'Should return 1')
  t.is(Step(-.0001), 0, 'Should return 0')
  t.is(Step(-999), 0, 'Should return 0')

})

test('Sign function', t => {
  t.is(typeof Sign, 'function', 'Sign is a function')
  t.is(Sign(.0001), 1, 'Should return 1')
  t.is(Sign(99), 1, 'Should return 1')
  t.is(Sign(0), 0, 'Should return 0')
  t.is(Sign(-.0001), -1, 'Should return -1')
  t.is(Sign(-999), -1, 'Should return -1')

})

test('SymmetricalRamp function', t => {
  const interval = -1
  const symmetricalRamp = SymmetricalRamp(interval)

  t.is(typeof SymmetricalRamp, 'function', 'SymmetricalRamp is a function')
  t.is(symmetricalRamp(1.00001), 1, 'Should return 1')
  t.is(symmetricalRamp(.99999), .99999, 'Should return .99999')
  t.is(symmetricalRamp(0), 0, 'Should return 0')
  t.is(symmetricalRamp(-1.00001), -1, 'Should return -1')
  t.is(symmetricalRamp(-.99999), -.99999, 'Should return -1')

})