import { setEmojislist } from './emojislist'
import { SET_EMOJISLIST } from '../constants'

test('get and dispatch a list of emoji characters from the api server', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_EMOJISLIST)
    expect(action.payload.length).toBeGreaterThan(0)
  }

  setEmojislist(mockDispatch)
})
