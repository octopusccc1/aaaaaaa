import DEFAULT_STATE from './initialState';
import {
  SET_SHIFT_TYPE,
  SET_ALL_CLICK_TYPE
} from '../actionTypes';
const technologyReducer = (state = DEFAULT_STATE.technology, action) => {
  switch (action.type) {
    case SET_SHIFT_TYPE:
      return Object.assign({}, state, {
        shiftType: action.shiftType
      });
    case SET_ALL_CLICK_TYPE:
      return Object.assign({}, state, {
        shiftType: action.allClickType
      });
    default:
      return state;
  }
}
export default technologyReducer;