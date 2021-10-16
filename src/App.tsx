import {Box} from "@mui/material";
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import './App.css';
import {useQuery} from "react-query";
import {ClipLoader} from "react-spinners";
import MovieCard from "./components/MovieCard";
import {fetchRecommendationsFromAPI} from "./data/fetch";

export const useStyles = makeStyles(() =>
    createStyles({
      container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
        overflow: 'hidden',
        paddingTop: 20,
      },
    })
)


function App() {
  const { isLoading, error, data } = useQuery('recommendations', fetchRecommendationsFromAPI)
  if (isLoading) return <ClipLoader size={150} />
  if (error) return <Box>An error has occurred:  + {(error as Error).message}</Box>
  return (
        <Box>
          <MovieCard id={data.id} title={data.title} imageURL={data.imageURL} summary={data.summary} rating={data.rating}/>
        </Box>
  );
}

export default App;
