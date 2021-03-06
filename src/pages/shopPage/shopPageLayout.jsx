import React, {useEffect, lazy, Suspense} from "react";

import {ProductDataContext} from "../../context/context";
import useAddGetRemoveData from "../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";

import HeaderLayout from "../../components/header/HeaderLayout";
const SearchBar = lazy (() => import ("./products/SearchBar"));
const FeaturedProducts = lazy (() => import ("./featuredProducts/FeaturedProducts"));
import Loading from "../../assets/svgsReactReady/loading/LoadingSvg";
import Modal from "../../components/modal/Modal";

function ShopPageLayout() {

	const {loading, error, receivedData, getData, setError} = useAddGetRemoveData();
	useEffect(() => {
		getData("products");
	}, []);
	return(
		<ProductDataContext.Provider value={{
			loading, error, receivedData, setError
		}}>
			<Modal error={error} setError={setError} />
			<HeaderLayout />
			<Suspense fallback={<Loading />}>
				<FeaturedProducts />
				<SearchBar />
			</Suspense>
		</ProductDataContext.Provider>
	);
}

export default ShopPageLayout;