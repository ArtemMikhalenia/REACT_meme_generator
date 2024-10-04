import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Generator from "./components/Generator/Generator";

function App() {
	return (
		<div className="container">
			<Header />
			<Generator />
		</div>
	);
}

export default App;
