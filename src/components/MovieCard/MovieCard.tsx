import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useMutation } from 'react-query'
import { useStyles } from './styles'
import { acceptRecommendation, rejectRecommendation } from '../../data/fetch'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

interface Props {
    id: string
    title: string
    imageURL: string
    summary: string
    rating: number
    finishRecommendation: () => void
}

const MovieCard = ({
    id,
    title,
    imageURL,
    summary,
    rating,
    finishRecommendation,
}: Props) => {
    const [visible, setVisible] = useState('visible')
    const classes = useStyles()
    const acceptRecommendationMutation = useMutation(acceptRecommendation)
    const rejectRecommendationMutation = useMutation(rejectRecommendation)

    function handleAcceptRecommendation() {
        setVisible('fadeOutLeft')
        setTimeout(() => {
            setVisible('visible')
            finishRecommendation()
            acceptRecommendationMutation.mutate(id)
        }, 600)
    }

    function handleRejectRecommendation() {
        setVisible('fadeOutRight')
        setTimeout(() => {
            setVisible('visible')
            finishRecommendation()
            rejectRecommendationMutation.mutate(id)
        }, 600)
    }

    const className = useMemo(() => {
        if (visible === 'visible') return classes.visible
        else if (visible === 'fadeOutLeft') return classes.fadeOutLeft
        else if (visible === 'fadeOutRight') return classes.fadeOutRight
    }, [visible])

    return (
        <Card className={className}>
            <CardContent>
                <Typography
                    gutterBottom
                    className={classes.title}
                    variant="body1"
                >
                    {title}
                </Typography>
                <Box>
                    <img src={imageURL} className={classes.image} alt="movie" />
                </Box>
                <Typography variant="body2" gutterBottom>
                    <span className={classes.spanElement}>Summary: </span>
                    {summary}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span className={classes.spanElement}>Rating: </span>
                    {rating}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
                <Button size="small" onClick={handleAcceptRecommendation}>
                    <ThumbUpIcon className={classes.thumbUpIcon} />
                </Button>
                <Button size="small" onClick={handleRejectRecommendation}>
                    <ThumbDownIcon className={classes.thumbDownIcon} />
                </Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard
