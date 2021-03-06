import Immutable from 'immutable'
import BigNumber from 'bignumber.js'
import * as R from 'ramda'

import { mapStateToProps } from './DirectMessagesMessages'

import { createReceivedMessage, now } from '../../../testUtils'
import create from '../../../store/create'
import { ChannelState } from '../../../store/handlers/channel'
import { ReceivedMessage } from '../../../store/handlers/messages'

describe('ChannelInput', () => {
  let store = null
  beforeEach(() => {
    jest.clearAllMocks()
    const channelId = 'this-is-test-channel-id'
    store = create({
      initialState: Immutable.Map({
        channel: ChannelState({
          spentFilterValue: 38,
          id: channelId,
          members: new BigNumber(0),
          message: 'This is a test message'
        }),
        contacts: Immutable.Map({
          address123: {
            messages: Immutable.List(
              Immutable.fromJS(
                R.range(0, 4).map(id =>
                  ReceivedMessage(
                    createReceivedMessage({
                      id,
                      createdAt: now.minus({ hours: 2 * id }).toSeconds()
                    })
                  )
                )
              )
            ),
            vaultMessages: Immutable.List(
              Immutable.fromJS(
                R.range(5, 8).map(id =>
                  ReceivedMessage(
                    createReceivedMessage({
                      id,
                      createdAt: now.minus({ hours: 2 * id }).toSeconds()
                    })
                  )
                )
              )
            )
          }
        })
      })
    })
  })

  it('will receive right props for direct message', async () => {
    const props = mapStateToProps(store.getState(), { contactId: 'address123' })
    expect(props).toMatchSnapshot()
  })
})
