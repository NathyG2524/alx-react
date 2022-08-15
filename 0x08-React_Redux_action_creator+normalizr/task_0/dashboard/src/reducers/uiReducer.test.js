import { initialState, uiReducer } from './uiReducers';
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes'

describe("test uiReducer function", () => {
  it("(uiReducer function) returns state equals the initial state when no action is passed", ()=>{
    const currentState = uiReducer(initialState, {})
    expect(currentState).toEqual(initialState)
  })

  it("(uiReducer function) returns state equals the initial state when action SELECT_COURSE is passed", ()=>{
    const currentState = uiReducer(initialState, { type: SELECT_COURSE })
    expect(currentState).toEqual(initialState)
  })

  it("(uiReducer function) returns state equals the initial state when action DISPLAY_NOTIFICATION_DRAWER is passed", ()=>{
    const currentState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })
    const expectedState = { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} }
    expect(currentState).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGIN_FAILURE is passed`, ()=>{
    const initState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {}
    }
    const currentState = uiReducer(initState, { type: LOGIN_FAILURE })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState).toEqual(expectedState)
  })

  it(`returns state changes isUserLoggedIn property correctly when action LOGOUT is passed`, () => {
    const initState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {}
    }
    const currentState = uiReducer(initState, { type: LOGOUT })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState).toEqual(expectedState)
  })
  
  
})