import { AnyAction } from 'redux'
import * as types from './constants'
import {Reducer} from "./intefaces";

const initialState = {
    finishedIndexes: []
}

const reducer = (
    state: Reducer = initialState,
    action: AnyAction
): Reducer => {
    switch (action.type) {
        case types.SET_FINISHED_INDEXES:
            return {
                ...state,
                finishedIndexes: action.payload,
            }
        default:
            return state
    }
}

export default reducer
