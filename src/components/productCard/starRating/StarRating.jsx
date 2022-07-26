import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import EmptyStarSvg from "../../../assets/svgsReactReady/stars/EmptyStarSvg";
import StarSvg from "../../../assets/svgsReactReady/stars/StarSvg";
function StarRating(props){
	const {rating, width} = props;
	const [starRating, setStarRating] = useState({});
	useEffect(() => {
		if(rating >= 0 && rating <= 5) {
			const newArrayFilled = rating && new Array(rating).fill(null);
			const emptyStars = 5 - rating;
			const newArrayEmpty = new Array(emptyStars).fill(null);
			setStarRating({
				newArrayFilled,
				newArrayEmpty
			});
		} else { // for edge cases, if rating is > 5 or < 0 will set rating as 5
			const newArrayFilled = new Array(5).fill(null);
			setStarRating({
				newArrayFilled
			});
		}
	}, [rating]);

	return (
		<div>
			{ starRating.newArrayFilled && starRating.newArrayFilled.map( () => {
				const key = Math.random()*100;
				return <StarSvg key={key} width={width} data-testid="star"/>;
			})}
			{starRating.newArrayEmpty && starRating.newArrayEmpty.map( () => {
				const key = Math.random()*100;
				return <EmptyStarSvg key={key} width={width} data-testid="emptyStar"/>;
			})}
		</div>
	);
}
StarRating.propTypes = {
	rating: PropTypes.number,
	width: PropTypes.string
};

export default StarRating;