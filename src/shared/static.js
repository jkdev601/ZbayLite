import mirrorKey from 'keymirror'
export const networkFee = 0.0000025
export const satoshiMultiplier = 100000000
export const networkFeeSatoshi = networkFee * satoshiMultiplier
export const targetUtxoCount = 25
export const debounceThreshold = 10
export const unknownUserId = 'c7e7c14740c3372fffe47c845a2b6720'
export const DOMAIN = 'handlers.zbay.app'
export const LOG_ENDPOINT = 'https://handlers.zbay.app/email'
export const PRICE_ORACLE_PUB_KEY =
  '0225528107f2b0cd8f0a7bedfa218ee8511b1753f87c76886d0ea7dd0e813270da'
export const REQUEST_MONEY_ENDPOINT =
  ' https://u1uxu6p870.execute-api.us-east-1.amazonaws.com/Prod/requestMoney'

export const actionTypes = mirrorKey({
  DECODE_CHANNEL: undefined,
  SET_DECODED_CHANNEL: undefined,
  SET_DECODING_CHANNEL: undefined,
  SET_DECODING_ERROR: undefined,
  CLEAR_CHANNEL: undefined,

  SET_APP_VERSION: undefined,
  SET_TRANSFERS: undefined,
  SET_NEW_USER: undefined,
  SET_CURRENT_MODAL_TAB: undefined,
  CLEAR_CURRENT_MODAL_TAB: undefined,
  SET_SPENT_FILTER_VALUE: undefined,
  SET_CHANNEL_MESSAGE: undefined,
  SET_DISPLAYABLE_LIMIT: undefined,
  SET_CHANNEL_ID: undefined,
  SET_CHANNEL_LOADING: undefined,
  SET_CHANNEL_LOADING_MESSAGE: undefined,
  SET_CHANNEL_SHAREABLE_URI: undefined,
  SET_CHANNEL_ADDRESS: undefined,
  SET_CHANNEL: undefined,
  LOAD_IDENTITY_CHANNELS: undefined,
  SET_CHANNELS_LAST_SEEN: undefined,
  SET_CHANNEL_UNREAD: undefined,
  SET_SHOW_INFO_MSG: undefined,
  SET_DIRECT_MESSAGES: undefined,
  ADD_MESSAGE: undefined,
  UPDATE_MESSAGE: undefined,
  ADD_CONTACT: undefined,
  SET_VAULT_DIRECT_MESSAGES: undefined,
  CLEAN_NEW_DIRECT_MESSAGESS: undefined,
  APPEND_NEW_DIRECT_MESSAGES: undefined,
  SET_CONTACTS_LAST_SEEN: undefined,
  SET_CONTACTS_USERNAMES: undefined,
  REMOVE_CONTACT: undefined,
  STOP_COORDINATOR: undefined,
  START_COORDINATOR: undefined,
  SET_CRITICAL_ERROR: undefined,
  SET_DIRECT_MESSAGE_RECIPIENT_USERNAME: undefined,
  SET_DIRECT_MESSAGE_RECIPIENT_ADDRESS: undefined,
  RESET_DIRECT_MESSAGE_CHANNEL: undefined,
  ADD_PENDING_DIRECT_MESSAGE: undefined,
  REMOVE_PENDING_DIRECT_MESSAGE: undefined,
  SET_USER_FEE: undefined,
  SET_PUBLIC_CHANNEL_FEE: undefined,
  SET_IDENTITY: undefined,
  SET_IDENTITY_BALANCE: undefined,
  SET_IDENTITY_LOCKED_BALANCE: undefined,
  SET_IDENTITY_ERROR: undefined,
  SET_FETCHING_BALANCE: undefined,
  SET_IDENTITY_LOADING: undefined,
  SET_IDENTITY_LOADING_MESSAGE: undefined,
  SET_IDENTITY_SHIPPING_DATA: undefined,
  SET_DONATION_ALLOW: undefined,
  SET_DONATION_ADDRESS: undefined,
  SET_SHIELDING_TAX: undefined,
  SET_INVITATION_AMOUNT: undefined,
  SET_INVITATION_AMOUNT_ZEC: undefined,
  SET_AFFILIATE_CODE: undefined,
  RESET_INVITATION: undefined,
  SET_GENERATED_INVITATION: undefined,
  SET_MESSAGES: undefined,
  CLEAN_NEW_MESSAGESS: undefined,
  APPEND_NEW_MESSAGES: undefined,
  REMOVE_PENDING_MESSAGE: undefined,
  ADD_PENDING_MESSAGE: undefined,
  OPEN_MODAL: undefined,
  CLOSE_MODAL: undefined,
  GET_STATUS: undefined,
  CREATE_ADDRESS: undefined,
  GET_BALANCE: undefined,
  SET_STATUS: undefined,
  SET_BOOTSTRAPPING: undefined,
  SET_BOOTSTRAPPING_MESSAGE: undefined,
  SET_FETCHING_PART: undefined,
  SET_IS_RESCANNING: undefined,
  SET_FETCHING_SIZE_LEFT: undefined,
  SET_FETCHING_STATUS: undefined,
  SET_FETCHING_SPEED: undefined,
  SET_FETCHING_END_TIME: undefined,
  SET_CONNECTION_STATUS: undefined,
  ENQUEUE_SNACKBAR: undefined,
  REMOVE_SNACKBAR: undefined,
  SET_OFFER_MESSAGES: undefined,
  ADD_OFFER: undefined,
  CLEAN_OFFER_NEW_MESSAGESS: undefined,
  SET_OFFER_LAST_SEEN: undefined,
  APPEND_OFFER_MESSAGES: undefined,
  APPEND_NEW_OFFER_MESSAGES: undefined,
  ADD_PENDING_OPERATION: undefined,
  RESOLVE_PENDING_OPERATION: undefined,
  REMOVE_PENDING_OPERATION: undefined,
  SET_PUBLIC_CHANNELS: undefined,
  SET_PRICE_USD: undefined,
  ADD_PRICE_MESSAGE: undefined,
  LOAD_REMOVED_CHANNELS_TIMESTAMP: undefined,
  SET_TOR_ENABLED: undefined,
  SET_TOR_URL: undefined,
  SET_TOR_ERROR: undefined,
  SET_TOR_STATUS: undefined,
  ADD_TXN_TIMESTAMP: undefined,
  SET_USERS: undefined,
  CREATE_VAULT: undefined,
  UPDATE_IDENTITY_SIGNER_KEYS: undefined,
  SET_VAULT_STATUS: undefined,
  UNLOCK_VAULT: undefined,
  CREATE_VAULT_IDENTITY: undefined,
  CLEAR_VAULT_ERROR: undefined,
  SET_CHANNEL_DESCRIPTION: undefined,
  SET_CHANNEL_AD_FEE: undefined,
  SET_ADVERT_FEE: undefined,
  SET_ONLY_REGISTERED: undefined,
  ADD_OWNED_CHANNEL: undefined,
  SET_FREE_UTXOS: undefined,
  ADD_MENTION_MISS: undefined,
  CLEAR_MENTION_MISS: undefined,
  REMOVE_MENTION_MISS: undefined,
  SET_RESCANNING_PROGRESS: undefined,
  SET_RESCANNING_MONITOR_STATUS: undefined,
  SET_WHITELIST: undefined,
  SET_WHITELIST_ALL_FLAG: undefined,
  SET_AUTO_LOAD_LIST: undefined,
  SET_CHANNEL_NOTIFICATION_FILTER: undefined,
  SET_CHANNELS_NOTIFICATION_SETTINGS: undefined,
  SET_USER_NOTIFICATION_FILTER: undefined,
  SET_USER_NOTIFICATION_SETTINGS: undefined,
  SET_CONTACTS_NOTIFICATION_SETTINGS: undefined,
  SET_CONTACT_NOTIFICATION_FILTER: undefined,
  SET_RESCANNING_STATUS: undefined,
  SET_LOGIN_SUCCESSFULL: undefined,
  SET_USER_NOTIFICATION_SOUND: undefined,
  SET_GUIDE_STATUS: undefined,
  SET_NEXT_SLIDE: undefined,
  SET_PREV_SLIDE: undefined,
  SET_APPLICATIONS_LOGS: undefined,
  SET_NODE_LOGS: undefined,
  SET_TRANSACTIONS_LOGS: undefined,
  SET_LOG_WINDOW_OPENED: undefined,
  SET_ALL_TRANSFERS_COUNT: undefined,
  LOCK_DM_QUEUE: undefined,
  UNLOCK_DM_QUEUE: undefined,
  LOCK_MESSAGE_QUEUE: undefined,
  UNLOCK_MESSAGE_QUEUE: undefined,
  SET_SKIP_COORDINATOR_FLAG: undefined,
  SET_NEW_TRANSFERS_COUNT: undefined,
  REDUCE_NEW_TRANSFERS_COUNT: undefined,
  SET_MESSAGE_BLOCKTIME: undefined,
  SET_VAULT_MESSAGE_BLOCKTIME: undefined,
  SET_OFFER_MESSAGE_BLOCKTIME: undefined,
  SET_USER_ADDRESSES: undefined,
  SET_USER_SHIELDED_ADDRESES: undefined,
  IS_SIZE_CHECKING_IN_PROGRESS: undefined,
  MESSAGE_SIZE_STATUS: undefined,
  SET_INITIAL_LOAD_FLAG: undefined,
  SET_REMOVED_CHANNELS: undefined
})

export const messageType = {
  BASIC: 1,
  AD: 2,
  TRANSFER: 4,
  USER: 5,
  CHANNEL_SETTINGS: 6,
  MODERATION: 7,
  PUBLISH_CHANNEL: 8,
  ITEM_BASIC: 11,
  ITEM_TRANSFER: 41,
  CHANNEL_SETTINGS_UPDATE: 61,
  AFFILIATE: 170 // 'aa' in hex
}

export const moderationActionsType = {
  REMOVE_MESSAGE: 'REMOVE_MESSAGE',
  BLOCK_USER: 'BLOCK_USER',
  UNBLOCK_USER: 'UNBLOCK_USER',
  ADD_MOD: 'ADD_MOD',
  REMOVE_MOD: 'REMOVE_MOD',
  REMOVE_CHANNEL: 'REMOVE_CHANNEL'
}
export const notificationFilterType = {
  ALL_MESSAGES: 1,
  MENTIONS: 2,
  NONE: 3,
  MUTE: 4
}
export const soundType = {
  NONE: 0,
  POW: 1,
  BANG: 2,
  SPLAT: 3
}
