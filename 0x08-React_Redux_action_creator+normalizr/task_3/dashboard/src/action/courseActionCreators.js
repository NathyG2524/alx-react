import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes.js";

export function selectCourse(index){
  return { type: SELECT_COURSE, index: index}
}

export function unSelectCourse(index){
  return { type: UNSELECT_COURSE, index: index}
}

export const dispatchselectCourse = (index) => dispatch(selectCourse(index))
export const dispatchUnSelectCourse = (index) => dispatch(unSelectCourse(index))