import {Box} from "@mui/material";
import React from 'react';
import './App.css';
import { useQuery} from "react-query";
import {ClipLoader} from "react-spinners";
import {fetchRecommendationsFromAPI} from "./data/fetch";

function App() {
  const { isLoading, error, data } = useQuery('recommendations', fetchRecommendationsFromAPI)
  if (isLoading) return <ClipLoader size={150} />
  if (error) return <Box>An error has occurred:  + {(error as Error).message}</Box>

  return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
  );
}

export default App;
