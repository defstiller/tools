import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./normalize.min.css";
import "./index.css";

import AppRouter from "./router/AppRouter";

import debounce from "./logic/functions/debounceFunction";

import {AuthContext, ScreenResizeContext} from "./context/context";

function App() {
	const auth = getAuth();
	const [isUser, setIsUser] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() =>{
		window.addEventListener("resize", debounce(() => setWidth(window.innerWidth) ,250, false), false);

		onAuthStateChanged(auth, (user) => {
			if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
				const uid = user;
				setIsUser(uid);
			// ...
			} else {
			// User is signed out
				setIsUser(false);
			}
		});
	}, []);
	return (
		<AuthContext.Provider value={{isUser, setIsUser, auth}}>
			<ScreenResizeContext.Provider value={{width}}>
				<AppRouter />
			</ScreenResizeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;