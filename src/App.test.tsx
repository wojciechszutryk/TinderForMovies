import { Typography } from '@mui/material'
import React from 'react'
import { render, screen } from '@testing-library/react'

test('renders header', () => {
    render(
        <Typography variant="h2" gutterBottom>
            Tinder for movies
        </Typography>
    )
    const linkElement = screen.getByText(/tinder/i)
    expect(linkElement).toBeInTheDocument()
})
