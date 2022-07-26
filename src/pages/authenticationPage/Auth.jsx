import React, {useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Modal from "../../components/modal/Modal";
import LoadingModal from "../../components/modal/loadingModal/LoadingModal";
import HeaderLayout from "../../components/header/HeaderLayout";

import handleAuthSubmitClick from "./handleAuthSubmitClick";
import styles from "./auth.module.css";

function Auth() {
	const auth = getAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [isRegister, setIsRegister] = useState(false);
	const [authInfo, setAuthInfo] = useState({
		email: "",
		password: ""
	});
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	function handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		setAuthInfo({
			...authInfo,
			[name]: value
		});
	}
	
	onAuthStateChanged(auth, (user) => {
		if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
			// const uid = user.uid;
			const timer = setTimeout(() => {
				navigate("/tools/shop");
			}, 2000);
			return () => clearTimeout(timer);
		
		// ...
		}
	});

	function handleSignInAsAdminClick() {
		setAuthInfo({
			email: "admin@gmail.com",
			password: "easyAdmin123"
		});
	}
	return <>
		<HeaderLayout />
		<main className={styles.main}>
			<LoadingModal loading={isLoading}/>
			<Modal 
				response={response}
				error={error}
				setResponse={setResponse}
				setError={setError}
				delay={1900}
			/>
			<div className={styles.formDiv}>

				{isRegister ?
					<h1>Sign up</h1>
					:
					<h1>Sign in</h1>
				}

				<form className={styles.form}
					onSubmit={(event) => {
						handleAuthSubmitClick(event, authInfo, setIsLoading, isRegister, setResponse, setError, auth);
					}}>
					<input 
						placeholder="email" 
						name="email" 
						type="email"
						value={authInfo.email} 
						autoComplete="username"
						onChange={handleChange}
						required/>
					<input 
						placeholder="password" 
						name="password" 
						type="password"
						value={authInfo.password} 
						autoComplete="current-password"
						onChange={handleChange}
						required/>
					<button type="submit" disabled={isLoading}>Submit</button>
				</form >

				<div className={styles.buttonDiv}>
					{isRegister ?
						<button onClick={() => setIsRegister(false)}>Already registered?</button>
						:
						<button onClick={() => setIsRegister(true)}>Register Instead</button>
					}
					<button onClick={() => handleSignInAsAdminClick()}>Use admin credentials</button>
				</div>
				
			</div>
		</main>
	</>;


}

export default Auth;