import { fetchRecommendationsFromAPI } from './functions'

it('fetch recommendations form api', async () => {
    const data = await fetchRecommendationsFromAPI()
    expect(data).toContainEqual({
        id: '1and3011',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        title: 'Inferno',
        summary: 'Lorem ipsum….',
        rating: 5.3,
    })
})
