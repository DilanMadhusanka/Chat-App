export default (state = null, action) => {
    switch (action.type) {
        case 'PUBLIC_CONTENT':
            return action.payload
        case 'ERROR_PUBLIC_CONTENT':
            return action.payload
        default:
            return state
    }
}