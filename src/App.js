import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Сontent/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Сontent/Dialogs/DialogsContainer";

function App() {
	return (

		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				<Route exact path='/profile'
				       render={() => <Profile/>}/>
				<Route path='/dialogs'
				       render={() => <DialogsContainer/>}/>
			</div>
			<Footer/>
		</div>

	);
}

export default App;