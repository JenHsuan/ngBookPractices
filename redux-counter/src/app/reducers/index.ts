import { Reducer, Action } from 'redux';
import {
    AppState,
    initialState
} from '../states';
import {
    INCREMENT,
    DECREMENT
} from '../types';

export const counterReducer: Reducer<AppState> = (
    state: AppState = initialState,
    action: Action
) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }
}
