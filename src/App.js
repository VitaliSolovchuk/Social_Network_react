import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Сontent/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Сontent/Dialogs/DialogsContainer";

function App(props) {
	return (

		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className='app-wrapper-content'>
				{/* <Route exact path='/profile' component={Profile}/>*/}
				<Route exact path='/profile'
				       render={() => <Profile store={props.store}/>}/>
				<Route path='/dialogs'
				       render={() => <DialogsContainer store={props.store}/>}/>
			</div>
			<Footer/>
		</div>

	);
}

export default App;
