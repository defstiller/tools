import React, {useEffect} from "react";

import HeaderLayout from "../../components/header/HeaderLayout";
import Modal from "../../components/modal/Modal";

import useAddGetRemoveData from "../../logic/firebaseLogic/firebaseDB/useAddGetRemoveData";
import useHandleInputChange from "../../logic/functions/useHandleInputChange";

import styles from "./contactPage.module.css";

function ContactPage() {
	const {objectInput, input, setInput} = useHandleInputChange();
	const {loading, error, response, addData, setResponse, setError} = useAddGetRemoveData();
	function handleSubmit(event) {
		event.preventDefault();
		addData("messages", input);
	}

	useEffect(() => {
		if(response) {
			setInput({
				email: "",
				name: "",
				message: "",
				subject: ""
			});
		}
	}, [response]);
	return (
		<>
			<HeaderLayout />
			<Modal 
				response={response} 
				delay={2000} 
				error={error} 
				setResponse={setResponse} 
				setError={setError}/>
			<main className={styles.main}>
				<h1>Would you like to contact us?</h1>
				<p>This form is for messages in admin section</p>
				<form disabled={loading} onSubmit={handleSubmit}>
					<input placeholder="Email" type="email" onChange={objectInput} value={input.email} name="email" required/>
					<input placeholder="Name" type="text" onChange={objectInput} value={input.name} name="name" pattern="[a-zA-Z'-'\s]*" required />
					<input placeholder="Subject" type="text" onChange={objectInput} value={input.subject} name="subject" required/>
					<textarea placeholder="Message" type="text" onChange={objectInput} value={input.message} name="message" required/>
					<button type="submit">Submit</button>
				</form>
			</main>
		</>
	);
}

export default ContactPage;