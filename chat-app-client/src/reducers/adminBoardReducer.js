export default (state = null, action) => {
    switch (action.type) {
        case 'ADMIN_BOARD':
            return action.payload
        case 'ERROR_ADMIN_BOARD':
            return action.payload
        default:
            return state
    }
}