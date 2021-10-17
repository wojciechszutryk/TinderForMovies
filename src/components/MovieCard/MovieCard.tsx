import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material'
import React from 'react'
import { useMutation } from 'react-query'
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
    const acceptRecommendationMutation = useMutation(acceptRecommendation)
    const rejectRecommendationMutation = useMutation(rejectRecommendation)

    function handleAcceptRecommendation() {
        finishRecommendation()
        acceptRecommendationMutation.mutate(id)
    }

    function handleRejectRecommendation() {
        finishRecommendation()
        rejectRecommendationMutation.mutate(id)
    }

    return (
        <Card>
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Box>
                    <img src={imageURL} alt="movie" />
                </Box>
                <Typography variant="body2">{summary}</Typography>
                <Typography variant="body2">{rating}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleAcceptRecommendation}>
                    <ThumbUpIcon />
                </Button>
                <Button size="small" onClick={handleRejectRecommendation}>
                    <ThumbDownIcon />
                </Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard
