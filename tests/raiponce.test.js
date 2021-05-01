import { lerp } from '..'

it('should support PX for responsive sizes', () => {
  console.log(lerp({ 768: 10, 1920: 30 }, 10))
})
