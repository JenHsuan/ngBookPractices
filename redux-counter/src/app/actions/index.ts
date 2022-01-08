import { Action, ActionCreator } from 'redux';
import {
    INCREMENT,
    DECREMENT
} from '../types';

export const increment: ActionCreator<Action> = () => ({
    type: INCREMENT
});

export const decrement: ActionCreator<Action> = () => ({
    type: DECREMENT
});
