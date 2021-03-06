import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import authReducer from './authReducer'
import streamReducer from './streamReducer'

export default combineReducers({
    auth: authReducer,
    // formReducer is created by redux-form and must have the key of 'form'
    form: formReducer,
    streams: streamReducer
})

