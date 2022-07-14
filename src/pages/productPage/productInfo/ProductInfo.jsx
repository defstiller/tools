import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import useAddGetRemoveData from "../../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";
import ProductReviews from "./productReviews/ProductReviews";
import AddToCart from "../../../components/addToCart/AddToCart";
import ImageWithFallback from "../../../components/imageWithFallback/ImageWithFallback";
import LoadingModal from "../../../components/modal/loadingModal/LoadingModal";

import styles from "./productInfo.module.css";
import StarRating from "../../../components/productCard/starRating/StarRating";

function ProductInfo() {
	const {id} = useParams();
	const {loading, receivedData, getData} = useAddGetRemoveData();
	const [product, setProduct] = useState();
	const [averageRating, setAverageRating] = useState(null);
	useEffect(() => {
		getData("products");
	}, []);
	useEffect(() => {
		receivedData && receivedData.map(data => {
			if(data.id === id) {
				setProduct(data);
			}
			return;
		});
	},[receivedData]);
	return (
		<>
			<LoadingModal loading={loading} />
			{product ? <>
				<main className={styles.main} data-testid="productMain">
					<figure>
						<ImageWithFallback src={product.imgUrl} data-testid="productImage"/>
					</figure>
					<div>
						<h1 data-testid="productName">{product.name}</h1>
						<StarRating width="1em" rating={averageRating}/>
						<p className={styles.price} data-testid="price">${product.price}</p>
						<p className={styles.description} data-testid="description">{product.description}</p>
						<AddToCart product={product} styles={styles}/>
					</div>
				</main>
				<section>
					<ProductReviews productDocId={product.docId} setAverageRating={setAverageRating} data-testid="reviews"/>
				</section>
			</>
				:
				loading || <h1>Product not found</h1>}
		</>
	);
}

export default ProductInfo;