import {useState} from "react";

function useAddGetRemoveData() {
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState();
	const [error, setError] = useState(false);
	const [receivedData, setReceivedData] = useState([]);
	/**
 * It takes a collection name and data to post, sets the loading state to true, tries to add the data
 * to the collection, sets the response state to the response message, and finally sets the loading
 * state to false.
 * 
 * If an error occurs, it sets the error state to the error message.
 * The `
 * @param dbCollection - The name of the collection you want to add data to. --> ReactProjectDb > collection > document > document object key / value pairs.
 * @param dataToPost - The data to be posted to the database.
 */
	async function addData(dbCollection, dataToPost) {
		setLoading(true);
		try {
			const dataToPostWithUuid = { // add unique id to posted data
				...dataToPost,
				id: Math.random() * 100
			};
			const responseMessage = "Data added with id: " + dataToPostWithUuid.id;
			setResponse(responseMessage);
		} catch (err) {
			setError(err);
			console.log(err);
		} finally {
			setLoading(false);
		}
	}
	async function getData(dbCollection) {
		try {
			setLoading(true);
			let data;
			if(dbCollection === "reviews") {
				data = [
					{
						comment: "test as expected",
						dateReviewLeft: "May 14,2022",
						docId: "8Dp0WEUF0r1aDsdav2oRBy6",
						id: 11,
						leftByEmail: "test@gmail.com",
						leftByUid: "dQzu00xEkvO6ia63K3LSBrnT3Rl1",
						productDocId: "123",
						rating: "5",
					}, 
					{
						comment: "test as",
						dateReviewLeft: "May 14,2022",
						docId: "8Dp0WEUF0r1aDssddav2oRBy6",
						id: 12,
						leftByEmail: "test123@gmail.com",
						leftByUid: "asdadQzu00xEkvsadsO6ia63K3LSBrnT3Rl1",
						productDocId: "000",
						rating: "3"
					},
					{
						comment: "test as 2",
						dateReviewLeft: "May 14,2022",
						docId: "8Dp0WEUF0r1asaDsdav2oRBy6",
						id: 13,
						leftByEmail: "tesasdt123@gmail.com",
						leftByUid: "asdadQzu00sadxEkvsadsO6ia63K3LSBrnT3Rl1",
						productDocId: "000",
						rating: "3"
					}
				];
			} else if (dbCollection === "products") {
				data = [
					{
						category: "shopEquipment",
						default: true,
						description: "Eu Lorem consectetu",
						docId: "0GUmo49W7NlYKEjyMJ09",
						id: "123",
						imgUrl: "https://iili.io/XDpZYX.md.webp",
						isFeatured: false,
						name: "Liquid Drain Container",
						price: "40.00",
						shipping: "5",
						subCategory: "",
						productDocId: "123"
					},
					{
						category: "shopEquipment",
						default: true,
						description: "Eu Lorem consectetu",
						docId: "asdasd0GUmo49W7NlYKEjyMJ09",
						id: "2",
						imgUrl: "https://iili.io/XDpZYX.md.webp",
						isFeatured: false,
						name: "Container",
						price: "50.00",
						shipping: "55",
						subCategory: "",
					}
				];
			}
			setReceivedData(data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}
	async function removeData(dbCollection, Id) {
		try {
			setLoading(true);
			setResponse("Item deleted, reloading list");
			getData(dbCollection);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	}
	return {loading, response, error, receivedData, addData, getData, removeData, setError, setResponse};
}


export default useAddGetRemoveData;