/* yarn example/ */
import fixtureBabel from '../src'

(async () => {
  const res = await fixtureBabel({
    text: 'example',
  })
  console.log(res)
})()