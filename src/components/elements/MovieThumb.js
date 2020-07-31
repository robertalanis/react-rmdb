import React from "react";
import PropTypes from "prop-types";

import { Link } from "@reach/router";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieID, clickable }) => (
	<StyledMovieThumb>
		{clickable ? (
			<Link to={`/${movieID}`}>
				<img className="clckable" src={image} alt="moviethumb" />
			</Link>
		) : (
			<img src={image} alt="moviethumb" />
		)}
	</StyledMovieThumb>
);

MovieThumb.propTypes = {
	image: PropTypes.string,
	movieID: PropTypes.number,
	clickable: PropTypes.bool,
};

export default MovieThumb;
