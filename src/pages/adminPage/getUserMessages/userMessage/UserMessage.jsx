import React from "react";
import PropTypes from "prop-types";

import styles from "./userMessage.module.css";
function UserMessage(props) {
	const {userMessage, removeData, loading} = props;
	const {email, name, subject, message, docId} = userMessage;
	return (
		<article className={styles.messageArticle}>
			<p data-testid="email">Email: {email || "email is missing, check form validation"}</p>
			<p data-testid="name">Name: {name || "name is missing, check form validation"}</p>
			<p data-testid="subject">Subject: {subject || "subject is missing, check form validation"}</p>
			<p data-testid="message">Message: {message || "message is missing, check form validation"}</p>
			<button onClick={() => removeData("messages", docId)} disabled={loading}>Remove message from data base</button>
		</article>
	)
}
UserMessage.propTypes = {
	userMessage: PropTypes.object,
	removeData: PropTypes.func,
	loading: PropTypes.bool,
	message: PropTypes.string,
	email: PropTypes.string,
	name: PropTypes.string,
	subject: PropTypes.string
};

export default UserMessage;