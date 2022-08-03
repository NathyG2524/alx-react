import {  fromJS } from 'immutable';

export default function getImmutableObject (object){
    const newObj = fromJS(object)
    return newObj
}
