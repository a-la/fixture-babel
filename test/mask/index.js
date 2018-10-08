import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import fixtureBabel from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await fixtureBabel({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts