import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import NodePanel from '../../../containers/widgets/node/NodePanel'
import IdentityPanel from '../../../containers/ui/IdentityPanel'
import WalletPanel from '../../../containers/widgets/walletPanel/WalletPanel'
import ChannelsPanel from '../../../containers/widgets/channels/ChannelsPanel'
// import DirectMessagesPanel from '../channels/DirectMessagesPanel'

const styles = theme => ({
  root: {
    minHeight: '100%',
    width: '300px',
    background: '#fff',
    borderRight: 'solid #e8e8e8 1px',
    paddingBottom: '55px',
    position: 'relative'
  },
  gutterBottom: {
    marginBottom: 4 * theme.spacing.unit
  },
  statusBar: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    left: 0,
    right: 0
  }
})

// TODO: add direct messages panel
const Sidebar = ({ classes }) => (
  <Grid container direction='column' className={classes.root}>
    <IdentityPanel />
    <WalletPanel />
    <ChannelsPanel />
    {/* <DirectMessagesPanel channels={channels} /> */}
    <NodePanel hexColor='#cca92c' className={classes.statusBar} />
  </Grid>
)

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Sidebar)