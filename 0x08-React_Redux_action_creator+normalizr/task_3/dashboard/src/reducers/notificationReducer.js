import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from "../action/notificationActionTypes"

const initial_state = {
    notification : [],
    filter : "DEFAULT"
}

export function notificationReducer (state = initial_state, action) {
    switch(action.type){
        case FETCH_NOTIFICATIONS_SUCCESS:
            const init = action.data.notifications.map((value) => {
                value.isRead = false
            })
            return {...state, notification: init}
        case MARK_AS_READ:{
            const initial = [...state]
            return (initial.notification.map((value) =>{
                if (value.notifications.id == action.index){
                    value.notification.isRead = true
                }
            }))
        }
        case SET_TYPE_FILTER:{
            const initial = [...state]
            return (initial.notification.map((value) => {
                    value.filter = action.filter

            }))
        }
            
            
    }
}