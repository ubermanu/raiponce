import { lerp } from '..'
import sassTrue from 'sass-true'

it('should support PX for responsive sizes', () => {
  expect(lerp({ 768: 1, 1920: 3 }, 10)).toEqual(
    'clamp(1rem, 1.7361111111vw - 0.3333333333rem, 3rem)'
  )
})

// Run scss tests
sassTrue.runSass({ file: 'tests/raiponce.test.scss' }, { describe, it })
