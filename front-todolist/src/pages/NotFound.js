import React from "react";
import Navigation from "../components/Navigation";

const NotFound = () => {
	return (
		<>
			<Navigation />
			<div>
				<h1>Erreur 404</h1>
				<p>Page non trouvée</p>
			</div>
		</>
	);
};

export default NotFound;
