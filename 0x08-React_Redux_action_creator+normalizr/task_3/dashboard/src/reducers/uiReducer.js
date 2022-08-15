import { LOGIN_FAILURE, 
    LOGIN_SUCCESS,
    DISPLAY_NOTIFICATION_DRAWER,
LOGOUT,
HIDE_NOTIFICATION_DRAWER } from "../action/uiActionTypes";
import {Map} from 'immutable'

const initial_state = Map({
    isNotificationDrawerVisible: false,
    isUserLoggerIn: true,
    user: {}
});
export const uiReducer = (state = initial_state, action) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", true)
        case HIDE_NOTIFICATION_DRAWER:
            return state.set("isNotificationDrawerVisible", false)
            
        case LOGIN_SUCCESS:
            return state.set("isUserLoggerIn", true)            
        case LOGIN_FAILURE:
            return state.set("isUserLoggerIn", false)
            
        case LOGOUT:
            return state.set("isUserLoggerIn", false)
            
    }
}
