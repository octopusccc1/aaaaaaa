import DEFAULT_STATE from './initialState';
import {
	SET_CONTENT
} from '../actionTypes';
const doorReducer = (state = DEFAULT_STATE.door, action) => {
	switch (action.type) {
		case SET_CONTENT:
		return Object.assign({},state,{
			contentTypes:action.key
		});
		default:
			return state;
	}
}
export default doorReducer ;