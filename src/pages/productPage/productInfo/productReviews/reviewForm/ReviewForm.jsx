import React from "react";
import PropTypes from "prop-types";
function ReviewForm(props) {
	const {handleReviewSubmit, input, objectInput,userData, ratingsAndUids, styles} = props;
	// If review with userUid already exists will not render Leave a review
	if(!ratingsAndUids.current.userUidsArray.includes(userData.userId)) {
		return (
			<aside className={styles.reviewFormDiv}>
				<p>Leave a review</p>
				<form onSubmit={handleReviewSubmit} className={styles.reviewForm} data-testid="reviewForm">
					<input 
						placeholder="rating" 
						type="number" 
						min="1" max="5" 
						name="rating" 
						value={input.rating || ""} 
						onChange={objectInput}
						className={styles.rating}
						required
					/>
					<br />
					<textarea 
						placeholder="comment" 
						name="comment" 
						value={input.comment || ""} 
						className={styles.comment}
						onChange={objectInput}
						required
					/>
					<br />
					<button type="submit">
								Submit
					</button>
				</form>
			</aside>		
		);
	}
}
ReviewForm.propTypes = {
	handleReviewSubmit: PropTypes.func,
	input: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	objectInput: PropTypes.func,
	styles: PropTypes.object,
	ratingsAndUids: PropTypes.object,
	userData: PropTypes.object
};

export default ReviewForm;