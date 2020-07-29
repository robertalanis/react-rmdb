import React from "react";

import { StyledMovieThumb } from "../styles/StyledMovieThumb"

const MovieThumb = ({ image, movieID, clickable}) => (
    <StyledMovieThumb>
        {clickable ? (
            <img className="clckable" src={image} alt="moviethumb" />
        ) : (
            <img src={image} alt="moviethumb" />
        )}
    </StyledMovieThumb>
);

export default MovieThumb;
