export default (state = null, action) => {
    switch (action.type) {
        case 'LOG_OUT':
            return null
        default:
            return state
    }
}