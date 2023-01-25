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
                     <p>{props.opening_crawl}</p>

                </div>
            </div>


        </Fragment>


    )

}

export default MovieList;