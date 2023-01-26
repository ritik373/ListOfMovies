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
  
       const response=await fetch('https://react-http-movie-7299d-default-rtdb.firebaseio.com/moviesList.json');
  
       if(!response.ok){
         throw new Error("Something Went wrong");
         
       }
  
       const data=await response.json();
    //    console.log(data);
     let loading=[];
       for (const key in data) {

        loading.push({
            id:key,
            title:data[key].title,
            opening_crawl:data[key].opining,
            releaseDate:data[key].release,
        })
     }
       console.log(loading)
  
    //    const transferData=data.map((movieData,index)=>{
    //      return {
    //                 id:index,
    //                 title:movieData[index].title,
    //                 opening_crawl:movieData[index].opining,
    //                 releaseDate:movieData[index].release,
  
    //            }
    //    })
  
   
       setMovie(loading);

     }catch(error){
       setError(error.message);
     }
     setisLoading(false);
  
  },[setMovie])
    
  
    useEffect(()=>{
      console.log("effect calling")
      FetchDataHandler();
    },[FetchDataHandler])
        
  const onDeleteHandler=(id)=>{
      console.log("delete post",id);

      fetch(`https://react-http-movie-7299d-default-rtdb.firebaseio.com/moviesList.json?${id}`,{ 
            
        method: `get`,//(----DELETE------ )request this request working but all api data delete from your moviesList
        headers: { 'Content-Type': 'application/json' },

    }).then((response)=>{
    return response.json();
}).then((data)=>{
    console.log("Item was delete",data);
}).catch(err=>console.log("something went wrong"))
  }
  
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
        // id={movieData.id}
        title={movieData.title}
        release={movieData.release}
       opening_crawl={movieData.opening_crawl}
  
        />
        <button onClick={()=>onDeleteHandler(movieData.title)}>Delete Post</button>
  
        </div>
  
      })}
       
      
      
      </div>
  
       
    
    
        </Fragment>
    )
}

export default Movies;