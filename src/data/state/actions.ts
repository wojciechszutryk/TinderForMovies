import { AnyAction } from 'redux'
import * as types from './constants'

export const setFinishedIndexes = (finishedNumbers: number[]): AnyAction => ({
    type: types.SET_FINISHED_INDEXES,
    payload: finishedNumbers,
})

export const setAllRecommendations = (
    allData: { [key: string]: number | string }[]
): AnyAction => ({
    type: types.SET_ALL_RECOMMENDATIONS,
    payload: allData,
})

export const setActiveIndex = (index: string): AnyAction => ({
    type: types.SET_ACTIVE_INDEX,
    payload: index,
})
