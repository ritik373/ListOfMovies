import React, { Fragment } from 'react';
import './MovieList.css'

const MovieList = (props) => {
   

    return (
        <Fragment>
            <div className="cart">
                <div className="header">
                    <h1>{props.title}</h1>

                </div>
                <div className="para">
                <h1>{props.release}</h1>
                <h1>{props.opening_crawl}</h1>

                </div>
               
            </div>


        </Fragment>


    )

}

export default MovieList;