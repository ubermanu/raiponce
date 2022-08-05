import { lerp } from '..'
import * as sassTrue from 'sass-true'

// Run JS tests
describe('JS: raiponce.lerp [function]', function () {
  it('supports PX for responsive sizes', () => {
    expect(lerp({ 768: '10px', 1920: '30px' })).toEqual(
      'clamp(10px, 1.7361111111vw - 3.3333333333px, 30px)'
    )
  })

  it('supports REM for responsive sizes, with a ratio of 10/1', () => {
    expect(lerp({ 768: '1rem', 1920: '3rem' }, 10)).toEqual(
      'clamp(1rem, 1.7361111111vw - 0.3333333333rem, 3rem)'
    )
  })

  it('supports REM for responsive sizes, with a ratio of 16/1', () => {
    expect(lerp({ 360: '1rem', 840: '3.5rem' }, 16)).toEqual(
      'clamp(1rem, 8.3333333333vw - 0.875rem, 3.5rem)'
    )
  })

  it('supports EM for responsive sizes', () => {
    expect(lerp({ 480: '4em', 800: '7em' }, 10)).toEqual(
      'clamp(4em, 9.375vw - 0.5em, 7em)'
    )
  })
})

// Run scss tests
sassTrue.runSass({ file: 'tests/raiponce.test.scss' }, { describe, it })
