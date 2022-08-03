import {  fromJS } from 'immutable';

function getImmutableObject (object){
    const newObj = fromJS(object)
    return newObj
}
