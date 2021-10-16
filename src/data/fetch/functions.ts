export const fetchRecommendationsFromAPI = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/recommendations/`,
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    )
    return await response.json()
}
export const acceptRecommendation = async (id: string) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/recommendations/${id}/accept/`,
        {
            method: 'PUT',
            body: id,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    )
    return await response.json()
}

export const rejectRecommendation = async (id: string) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/recommendations/${id}/reject/`,
        {
            method: 'PUT',
            body: id,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    )
    return await response.json()
}