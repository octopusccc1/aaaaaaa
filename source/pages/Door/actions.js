import {
    SET_CONTENT
} from './actionTypes';

export const setContent = (key)=>{
    return {
        type:SET_CONTENT,
        key
    }
}