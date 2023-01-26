import React, { useState, Fragment ,useEffect,useCallback} from 'react';
import MovieList from './MovieList';

const Movies = ()=>{
    const [Movie, setMovie] = useState([])
    const [isLoading,setisLoading]=useState(false);
    const [error,setError]=useState(null);
  
       const FetchDataHandler= useCallback(async()=>{
  
        setError(null)
        try{
         setisLoading(true);
  
       const response=await fetch('https://swapi.dev/api/films');
  
       if(!response.ok){
         throw new Error("Something Went wrong");
         
       }
  
       const data=await response.json();
  
       const transferData=data.results.map((movieData)=>{
         return {
           title:movieData.title,
           director:movieData.director,
           producer:movieData.producer,
           opening_crawl:movieData.opening_crawl,
  
         }
       })
  
      
       setMovie(transferData);
     }catch(error){
       setError(error.message);
     }
     setisLoading(false);
  
  },[1])
    
  
    useEffect(()=>{
      console.log("effect calling")
      FetchDataHandler();
    },[FetchDataHandler])
        
  
  
    return ( <Fragment>
  
      <div className="btn">
           <button onClick={FetchDataHandler}>Fetch Movies</button>
      
      </div>
  
      <div className="movie">
      {!isLoading && Movie.length==0 &&  <h1>No Found Movie...</h1>}
  
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

export default Movies;