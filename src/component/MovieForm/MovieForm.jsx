import React, { Fragment } from 'react';
import './movieForm.css'
import { useState } from 'react';

const MovieForm = (props) => {
    const [title,setTitle]=useState('');
    const [opining,setopining]=useState('');
    const [release,setrelease]=useState('');

    // const [MovieData, setMovieData] = useState({
    //     title: title,
    //     opining: opining,
    //     release: release,


    // })

    const onTitleHandler = (event) => {
     setTitle(event.target.value)

    }
    const onOpeningHandler = (event) => {
        setopining(event.target.value)


    }
    const onReleaseHandler = (event) => {

        setrelease(event.target.value)


    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const MovieData={
        
            title: title,
            opining: opining,
            release: release,

        }

        fetch('https://react-http-movie-7299d-default-rtdb.firebaseio.com/moviesList.json',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(MovieData),

        })
        console.log(MovieData);
        setTitle('');
        setopining('');
        setrelease('');
        
    }

    return (<Fragment>
        <div className="formcard">
            <div className="form">
                <form action="" onSubmit={onSubmitHandler}>

                    <label htmlFor="t">TiTel</label><br />
                    <input type="text" width="100%" onChange={onTitleHandler} value={title}/><br />
                    <label htmlFor="">Opining Text</label><br />
                    <textarea name="" id="" cols="50" rows="5" onChange={onOpeningHandler} value={opining}></textarea><br />
                    <label htmlFor="">Release Data</label><br />
                    <textarea name="" id="" cols="50" rows="3" onChange={onReleaseHandler} value={release}></textarea><br />
                    <button>Submit</button>
                  <button onClick={props.onClick}>Close</button>

                </form>

            </div>
        </div>

    </Fragment>
    )
}

export default MovieForm;