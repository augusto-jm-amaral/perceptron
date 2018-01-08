import test from 'ava'
import {
  Step,
  Sign,
  SymmetricalRamp,
  HyperbolicTangent,
  Sigmoid,
  roundFunction,
} from './../src'

test('Step function', (t) => {
  t.is(typeof Step, 'function', 'Step is a function')
  t.is(Step(0.0001), 1, 'Should return 1')
  t.is(Step(99), 1, 'Should return 1')
  t.is(Step(-0.0001), 0, 'Should return 0')
  t.is(Step(-999), 0, 'Should return 0')
})

test('Sign function', (t) => {
  t.is(typeof Sign, 'function', 'Sign is a function')
  t.is(Sign(0.0001), 1, 'Should return 1')
  t.is(Sign(99), 1, 'Should return 1')
  t.is(Sign(0), 0, 'Should return 0')
  t.is(Sign(-0.0001), -1, 'Should return -1')
  t.is(Sign(-999), -1, 'Should return -1')
})

test('SymmetricalRamp function', (t) => {
  const interval = -1
  const symmetricalRamp = SymmetricalRamp(interval)

  t.is(typeof SymmetricalRamp, 'function', 'SymmetricalRamp is a function')
  t.is(symmetricalRamp(1.00001), 1, 'Should return 1')
  t.is(symmetricalRamp(0.99999), 0.99999, 'Should return .99999')
  t.is(symmetricalRamp(0), 0, 'Should return 0')
  t.is(symmetricalRamp(-1.00001), -1, 'Should return -1')
  t.is(symmetricalRamp(-0.99999), -0.99999, 'Should return -.99999')
})

test('HyperbolicTangent function', (t) => {
  const roundHyperbolicTangent = roundFunction(HyperbolicTangent)

  t.is(typeof HyperbolicTangent, 'function', 'HyperbolicTangent is a function')
  t.is(roundHyperbolicTangent(0.27, 2), 0.26, 'Should return .26')
  t.is(roundHyperbolicTangent(0.37, 2), 0.35, 'Should return .35')
  t.is(roundHyperbolicTangent(0.05, 2), 0.05, 'Should return .05')
  t.is(roundHyperbolicTangent(0.96, 2), 0.74, 'Should return .74')
  t.is(roundHyperbolicTangent(0.59, 2), 0.53, 'Should return .53')
})

test('Sigmoid function', (t) => {
  const roundSigmoid = roundFunction(Sigmoid)

  t.is(typeof Sigmoid, 'function', 'Sigmoid is a function')
  t.is(Sigmoid(99), 1, 'Should return 1')
  t.is(roundSigmoid(0.05, 4), 0.5125, 'Should return 0.5125')
})
