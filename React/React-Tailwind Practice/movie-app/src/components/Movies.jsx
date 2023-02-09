import React from "react";

const Movies = (props)=>{

    return(
        <>
        <div className="container">
            {props.movies.map((movie)=>{
                return <h1 key={movie.imdbID}>{movie.Title}</h1>
            })}
        </div>
        </>
    );

}

export default Movies;