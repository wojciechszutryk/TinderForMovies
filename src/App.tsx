import { Box, Card, Container, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import React, { useCallback, useMemo } from 'react'
import './App.css'
import { useQuery } from 'react-query'
import { ClipLoader } from 'react-spinners'
import MovieCard from './components/MovieCard'
import { fetchRecommendationsFromAPI } from './data/fetch'
import {
    setActiveIndex,
    setAllRecommendations,
    setFinishedIndexes,
} from './data/state/actions'
import { useAppDispatch } from './hooks/useAppDispach'
import { useAppSelector } from './hooks/useAppSelector'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '80%',
            overflow: 'hidden',
            paddingTop: 20,
        },
        messageCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
        },
        header: {
            textAlign: 'center',
        },
    })
)

function App() {
    const dispatch = useAppDispatch()
    const classes = useStyles()
    const finishedIndexes = useAppSelector((state) => state.finishedIndexes)
    const activeIndex = useAppSelector((state) => state.activeIndex)
    const { isLoading, error, data } = useQuery(
        'recommendations',
        fetchRecommendationsFromAPI,
        {
            onSuccess: (data) => {
                dispatch(setAllRecommendations(data))
                dispatch(setActiveIndex(data[0].id))
            },
        }
    )
    const currentRecommendation = useMemo(() => {
        return data && activeIndex
            ? data.find(
                  (recommendation: { [key: string]: number | string }) =>
                      recommendation.id === activeIndex
              )
            : null
    }, [activeIndex, data])

    const finishRecommendation = useCallback(() => {
        const finishedIndexesCopy = [...finishedIndexes]
        finishedIndexesCopy.push(currentRecommendation)
        dispatch(setFinishedIndexes(finishedIndexesCopy))

        const dataIndexes = data.map(
            (recommendation: { [key: string]: number | string }) =>
                recommendation.id
        )
        const nextRecommendation = data[
            dataIndexes.indexOf(currentRecommendation.id) + 1
        ]
            ? data[dataIndexes.indexOf(currentRecommendation.id) + 1].id
            : null
        dispatch(setActiveIndex(nextRecommendation))
    }, [finishedIndexes, currentRecommendation, dispatch, data])

    if (isLoading) return <ClipLoader size={150} />
    if (error)
        return <Box>An error has occurred: + {(error as Error).message}</Box>

    return (
        <Container maxWidth="xs">
            <Typography variant="h2" className={classes.header} gutterBottom>
                Tinder for movies
            </Typography>
            {activeIndex ? (
                <Box>
                    <MovieCard
                        id={currentRecommendation.id}
                        title={currentRecommendation.title}
                        imageURL={currentRecommendation.imageURL}
                        summary={currentRecommendation.summary}
                        rating={currentRecommendation.rating}
                        finishRecommendation={finishRecommendation}
                    />
                </Box>
            ) : (
                <Box>
                    <Card className={classes.messageCard}>
                        <Typography>
                            Sorry, no more recommendations available
                        </Typography>
                    </Card>
                </Box>
            )}
        </Container>
    )
}

export default App
