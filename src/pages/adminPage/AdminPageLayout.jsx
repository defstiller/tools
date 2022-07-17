import React, {useState, useEffect} from "react";

import AdminProductList from "./adminProductList/AdminProductList";
import AddProduct from "./addProduct/AddProduct";
import GetUserMessages from "./getUserMessages/GetUserMessages";
import HeaderLayout from "../../components/header/HeaderLayout";
import AdminReviewList from "./adminReviewList/AdminReviews";
import useAddGetRemoveData from "../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";

import styles from "./adminPageLayout.module.css";
import LoadingModal from "../../components/modal/loadingModal/LoadingModal";
function AdminPageLayout() {
	const [adminPage, setAdminPage] = useState("none");
	const {loading, error, receivedData, getData,} = useAddGetRemoveData();
	useEffect(() => {
		getData("adminPermissionsPreCheck");
	}, []);
	function handleAdminPageLayout(event) {
		setAdminPage(event.target.name);
	}
	return <>
		<HeaderLayout />
		<LoadingModal loading={loading}/>
		{
			receivedData[0]
				&&
				<section className={styles.adminSection}>
					<button onClick={event => handleAdminPageLayout(event)} name="addProduct">Add Product</button>
					<button onClick={event => handleAdminPageLayout(event)} name="productList">Product list</button>
					<button onClick={event => handleAdminPageLayout(event)} name="userMessages">User messages</button>
					<button onClick={event => handleAdminPageLayout(event)} name="userReviews">Reviews</button>
				</section>
		}
		{
			!loading && error 
				&&
				<h1 className={styles.permissions}> Insufficient Permissions, please log in as admin user</h1>
		}			

		{adminPage === "addProduct" && <AddProduct /> }
		{adminPage === "productList" &&<AdminProductList /> }
		{adminPage === "userMessages" && <GetUserMessages /> }
		{adminPage === "userReviews" && <AdminReviewList /> }
		

	</>;
}

export default AdminPageLayout;