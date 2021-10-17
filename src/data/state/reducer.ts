import { AnyAction } from 'redux'
import * as types from './constants'
import {Reducer} from "./intefaces";

export const initialState = {
    finishedIndexes: [],
    allRecommendations: [],
    activeIndex: null
}

const reducer = (
    state: Reducer = initialState,
    action: AnyAction
): Reducer => {
    switch (action.type) {
        case types.SET_ALL_RECOMMENDATIONS:
            return {
                ...state,
                allRecommendations: action.payload,
            }
        case types.SET_FINISHED_INDEXES:
            return {
                ...state,
                finishedIndexes: action.payload,
            }
        case types.SET_ACTIVE_INDEX:
            return {
                ...state,
                activeIndex: action.payload,
            }
        default:
            return state
    }
}

export default reducer
