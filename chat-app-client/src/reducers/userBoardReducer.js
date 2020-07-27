export default (state = null, action) => {
    switch (action.type) {
        case 'USER_BOARD':
            return action.payload
        case 'ERROR_USER_BOARD':
            return action.payload
        default:
            return state
    }
}