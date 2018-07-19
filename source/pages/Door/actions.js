import {
    SET_CONTENT,
    SET_SHIFT_TYPE,
} from './actionTypes';

export const setContent = (key)=>{
    return {
        type:SET_CONTENT,
        key
    }
}




/***********************demo action***************************************************************/
export const setShiftType = (shiftType) => {
    return {
        type:SET_SHIFT_TYPE,
        shiftType
    }
}


