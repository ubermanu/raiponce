import { lerp } from '..'
import sassTrue from 'sass-true'

it('should support PX for responsive sizes', () => {
  expect(lerp({ 768: '10px', 1920: '30px' }, 10)).toEqual(
    'clamp(10px, 1.7361111111vw - 3.3333333333px, 30px)'
  )
})

// Run scss tests
sassTrue.runSass({ file: 'tests/raiponce.test.scss' }, { describe, it })
