import React, { useState, Fragment ,useEffect,useCallback} from 'react'
import Movies from './component/Movies'
import MovieForm from './component/MovieForm/MovieForm'
import './App.css';

function App() {

  const[showForm,setShowForm]=useState(false);

  const onShowMovieFormHandler=()=>{
    setShowForm(true);
  }
  const onHideMovieFormHandler=()=>{
    setShowForm(false);
  }


  return (
    <div>
   {showForm && <MovieForm  onClick={onHideMovieFormHandler}/>}

    <button className="addbutton" onClick={onShowMovieFormHandler}>ADD MOVIE</button>

    <Movies />
    </div>
  )
 
}

export default App
