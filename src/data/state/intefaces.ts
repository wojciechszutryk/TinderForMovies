export interface Reducer {
    finishedIndexes: number[]
    activeIndex: string | null
    allRecommendations: { [key: string]: number | string }[]
}
