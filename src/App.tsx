import React from "react";
import "./App.css";
import ClientsBar from "./components/ClientsBar";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
function App() {
	return (
		<div className=' bg-z-gray w-screen h-screen'>
			<div className=''>
				<Navbar />
				<Hero />
				<ClientsBar />
			</div>
		</div>
	);
}

export default App;
