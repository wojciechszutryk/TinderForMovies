import { AnyAction } from 'redux'
import * as types from './constants'

export const setFinishedIndexes = (finishNumber: number): AnyAction => ({
    type: types.SET_FINISHED_INDEXES,
    payload: finishNumber,
})