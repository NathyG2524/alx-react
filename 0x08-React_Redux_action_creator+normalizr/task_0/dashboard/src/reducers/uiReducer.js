import { LOGIN_FAILURE, 
    LOGIN_SUCCESS,
    DISPLAY_NOTIFICATION_DRAWER,
LOGOUT,
HIDE_NOTIFICATION_DRAWER } from "../action/uiActionTypes";

const initial_state = {
    isNotificationDrawerVisible: false,
    isUserLoggerIn: true,
    user: {}
};
export const uiReducer = (state = initial_state, action) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                isNotificationDrawerVisible: true
            }
        case HIDE_NOTIFICATION_DRAWER:
            return {
                isNotificationDrawerVisible: false
            }
        case LOGIN_SUCCESS:
            return {
                isUserLoggerIn: true
            }
        case LOGIN_FAILURE:
            return {
                isUserLoggerIn: false
            }
        case LOGOUT:
            return {
                isUserLoggerIn: false
            }
    }
}
