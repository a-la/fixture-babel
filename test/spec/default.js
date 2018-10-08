import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import fixtureBabel from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof fixtureBabel, 'function')
  },
  async 'calls package without error'() {
    await fixtureBabel()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await fixtureBabel({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T