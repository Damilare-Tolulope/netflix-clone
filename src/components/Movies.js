import React from 'react'
import logo from '../logo.svg'
import TVShows from './TVShows'

const Movies = () => {
    return (
        <>
        <TVShows />
            <h1>Movies</h1>
            <p>Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</p>
            <div>
                <h3>Popular on Netflix</h3>
                <div className ="slider">
                    <div style={{textAlign:'center'}} className="one-item">
                        <img src={logo} alt="movie_img" height="250px" width="450px" />
                        <p>React Logo</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Movies
