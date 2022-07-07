import React, {useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";

import StarRating from "../../../../components/productCard/starRating/StarRating";
import ReviewForm from "./reviewForm/ReviewForm";
import LoadingModal from "../../../../components/modal/loadingModal/LoadingModal";
import Modal from "../../../../components/modal/Modal";

import useAddGetRemoveData from "../../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";
import useHandleInputChange from "../../../../logic/functions/useHandleInputChange";
import { AuthContext} from "../../../../context/context";

import styles from "./productReviews.module.css";
function ProductReviews(props) {
	const {auth} = useContext(AuthContext);
	const [userData, setUserData] = useState({
		userId: null,
		userEmail: null
	});
	const ratingsAndUids = useRef({
		userUidsArray: [],
		ratings: []
	});
	const {productDocId, setAverageRating} = props;
	const {loading, error, response, receivedData, addData, getData} = useAddGetRemoveData();
	const {objectInput, input} = useHandleInputChange();
	const [reviews, setReviews] = useState([]);
	function handleReviewSubmit(event) {
		event.preventDefault();
		const currentDate = new Date();
		const options = { year: "numeric", month: "long", day: "numeric" };
		const currentDateToPost = currentDate.toLocaleDateString("en-us",options);
		const dataToPost = {
			comment: input.comment,
			rating: input.rating,
			productDocId: productDocId,
			leftByUid: userData.userId,
			leftByEmail: userData.userEmail,
			dateReviewLeft: currentDateToPost
		};
		addData("reviews", dataToPost);
	}
	useEffect(() => {
		if(auth.currentUser) {
			const userId = auth.currentUser.uid;
			const userEmail = auth.currentUser.email;
			setUserData({
				userId,
				userEmail
			});
		} else {
			setUserData({
				userId: null,
				userEmail: null
			});
		}
	}, [auth.currentUser]);
	useEffect(() => { 
		getData("reviews");
	}, [response]);
	useEffect(() => { // handle reviews
		if(receivedData) {
			const productReviews = [];
			const productRatings = []; // for average rating
			receivedData.map(data => { //data received will include docId, which is id of comment, not product it is assigned to
				if(data.productDocId === productDocId) {
					productRatings.push(parseInt(data.rating, 10));
					productReviews.push(data);
					ratingsAndUids.current.userUidsArray.push(data.leftByUid);
				}
				return;
			});
			setReviews(productReviews);
			if(productRatings.length > 0) {
				let average = null;
				average = productRatings.reduce((previous, current) => {
					return previous + current;
				});
				average = Math.ceil(average / productRatings.length);
				setAverageRating(average);
			}
		}
	}, [receivedData]);
	return (
		<div>
			<LoadingModal loading={loading} />
			<Modal response={response} error={error} />
			<article className={styles.reviewArticle}>
				{reviews.length ? <p>REVIEWS</p> : <p>No reviews found</p>}
				{reviews && reviews.map(review => {
					return (
						<div key={review.id} className={styles.reviewDiv} data-testid="reviews">
							<div>
								<p>Commented by: {review.leftByEmail}</p>
								<p>{review.dateReviewLeft}</p>
								<StarRating width="1em" rating={parseInt(review.rating, 10)}/>
							</div>
							<div className={styles.commentDiv}>
								<p>{review.comment}</p>
							</div>
						</div>
					);
				})
				}
			</article>
			{userData.userId && 
			<ReviewForm 
				handleReviewSubmit={handleReviewSubmit} 
				input={input} 
				objectInput={objectInput} 
				ratingsAndUids={ratingsAndUids}	
				userData={userData}
				styles={styles}
				data-testid="reviewForm"
			/>}
		</div>
	);
}
ProductReviews.propTypes = {
	productDocId: PropTypes.string,
	setAverageRating: PropTypes.any
};

export default ProductReviews;