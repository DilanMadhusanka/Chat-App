import loginApi from "../apis/loginApi"
import history from "../history"
import authHeader from "../services/auth-header"

export const signup = formValues => async dispatch => {
    await loginApi.post('/api/auth/signup', formValues).then(
        response => {
            dispatch({ type: 'SIGN_UP', payload: { ...response.data, ...{ successful: true } } })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'SIGN_UP_ERROR', payload: { ...response, ...{ successful: false } } })
        }
    )

}

export const login = formValues => async dispatch => {
    await loginApi.post('/api/auth/signin', formValues).then(
        response => {
            localStorage.setItem("user", JSON.stringify(response.data))
            dispatch({ type: 'SIGN_IN', payload: { ...response.data } })
            history.push('/chat')
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            dispatch({ type: 'AUTH_ERROR', payload: response })
        }
    )

}

export const getCurrentUser = () => {
    return {
        type: 'GET_USER',
        payload: JSON.parse(localStorage.getItem('user'))
    }
}

export const logOut = () => {
    localStorage.removeItem('user')
    return {
        type: 'LOG_OUT'
    }
}

export const getPublicContent = () => async dispatch => {
    await loginApi.get('/api/test/all').then(
        response => {
            dispatch({ type: 'PUBLIC_CONTENT', payload: response.data })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({ type: 'ERROR_PUBLIC_CONTENT', payload: response })
        }
    )
}

export const getUserBoard = () => async dispatch => {
    await loginApi.get('/api/test/user', { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'USER_BOARD', payload: response.data })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({ type: 'ERROR_USER_BOARD', payload: response })
        }
    )
}

export const getModeratorBoard = () => async dispatch => {
    await loginApi.get('/api/test/mod', { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'MOD_BOARD', payload: response.data })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({ type: 'ERROR_MOD_BOARD', payload: response })
        }
    )
}

export const getAdminBoard = () => async dispatch => {
    await loginApi.get('/api/test/admin', { headers: authHeader() }).then(
        response => {
            dispatch({ type: 'ADMIN_BOARD', payload: response.data })
        },
        error => {
            const response =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({ type: 'ERROR_ADMIN_BOARD', payload: response })
        }
    )
}