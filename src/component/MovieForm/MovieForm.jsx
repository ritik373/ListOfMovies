import React, { Fragment } from 'react';
import './movieForm.css'
import { useState } from 'react';

const MovieForm = (props) => {
    const [title,setTitle]=useState('');
    const [opining,setopining]=useState('');
    const [release,setrelease]=useState('');

    const [MovieData, setMovieData] = useState({
        title: title,
        opining: opining,
        release: release,


    })

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
        setMovieData({
            title: title,
            opining: opining,
            release: release,

        })
        console.log(MovieData);
    }

    return (<Fragment>
        <div className="formcard">
            <div className="form">
                <form action="" onSubmit={onSubmitHandler}>

                    <label htmlFor="t">TiTel</label><br />
                    <input type="text" width="100%" onChange={onTitleHandler} /><br />
                    <label htmlFor="">Opining Text</label><br />
                    <textarea name="" id="" cols="50" rows="5" onChange={onOpeningHandler} ></textarea><br />
                    <label htmlFor="">Release Data</label><br />
                    <textarea name="" id="" cols="50" rows="3" onChange={onReleaseHandler} ></textarea><br />
                    <button>Submit</button>
                  <button onClick={props.onClick}>Close</button>

                </form>

            </div>
        </div>

    </Fragment>
    )
}

export default MovieForm;