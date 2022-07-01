import React from "react";
import PropTypes from "prop-types";

import styles from "./review.module.css";
function Review(props) {
	const {review, removeData, loading} = props;
	const {leftByEmail, comment, dateReviewLeft, rating, docId} = review;
	return (
		<article className={styles.reviewArticle}>
			<p data-testid="email">Email: {leftByEmail || "unknown"}</p>
			<p data-testid="comment">Comment: {comment || "no comment"}</p>
			<p data-testid="date">Date: {dateReviewLeft || "unknown"}</p>
			<p data-testid="rating">Rating: {rating || "no rating"}</p>
			<p data-testid="doc id">DocID: {docId}</p>
			<button onClick={() => removeData("reviews", docId)} disabled={loading}>Remove review from data base</button>
		</article>
	);
}
Review.propTypes = {
	review: PropTypes.object,
	removeData: PropTypes.func,
	loading: PropTypes.bool,
};

export default Review;