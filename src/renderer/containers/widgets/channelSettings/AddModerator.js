import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as R from 'ramda'

import moderationActions from '../../../store/handlers/moderationActions'
import AddModerator from '../../../components/widgets/channelSettings/AddModerator'
import channelSelectors from '../../../store/selectors/channel'
import usersSelector from '../../../store/selectors/users'
import { withModal } from '../../../store/handlers/modals'
import { moderationActionsType } from '../../../../shared/static'
import contactsSelectors from '../../../store/selectors/contacts'

export const mapStateToProps = state => {
  const messagesState = contactsSelectors.directMessages(channelSelectors.channelId(state))(state)
  const visibleMessages = messagesState.get('visibleMessages')
  const moderators = messagesState.get('channelModerators')
  if (visibleMessages) {
    const members = visibleMessages.reduce((acc, msg) => {
      return acc.add(msg.publicKey)
    }, new Set())
    return {
      members: new Set([...members].filter(x => !moderators.has(x))),
      users: usersSelector.users(state)
    }
  } else {
    return {
      members: new Set([]),
      users: usersSelector.users(state)
    }
  }
}

export const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      addModerator: publicKey =>
        moderationActions.epics.handleModerationAction({
          moderationType: moderationActionsType.ADD_MOD,
          moderationTarget: publicKey
        })
    },
    dispatch
  )

export default R.compose(
  connect(mapStateToProps, mapDispatchToProps),
  withModal('addModerator')
)(AddModerator)
