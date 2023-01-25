import React, { useState, Fragment } from 'react'
import MovieList from './component/MovieList'
import './App.css';

function App() {
  const [Movie, setMovie] = useState([])
  const [isLoading,setisLoading]=useState(false);

     async function FetchDataHandler(){
      setisLoading(true);
      const response=await fetch('https://swapi.dev/api/films');

      const data=await response.json();

      const transferData=data.results.map((movieData)=>{
        return {
          title:movieData.title,
          director:movieData.director,
          producer:movieData.producer,
          opening_crawl:movieData.opening_crawl,

        }
      })
      setisLoading(false);

     setMovie(transferData);
  }


  return ( <Fragment>

    <div className="btn">
         <button onClick={FetchDataHandler}>Fetch Movies</button>
    
    </div>

    <div className="movie">
    {!isLoading && Movie.length==0 && <h1>No Found Movie...</h1>}
    {isLoading && <h1>Loading...</h1>}
    {Movie.map((movieData)=>{
     return <div key={Math.random()}>
      <MovieList 
      title={movieData.title}
     director={movieData.director}
     producer={movieData.producer}
     opening_crawl={movieData.opening_crawl}

      />

      </div>

    })}
     
    
    
    </div>

     
  
  
      </Fragment>
  )
}

export default App
