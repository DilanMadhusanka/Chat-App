export default (state = null, action) => {
    switch (action.type) {
        case 'MOD_BOARD':
            return action.payload
        case 'ERROR_MOD_BOARD':
            return action.payload
        default:
            return state
    }
}