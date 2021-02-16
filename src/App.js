import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Сontent/Profile/Profile";
import Dialogs from "./components/Сontent/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App(props) {
	return (

			<div className="app-wrapper">
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					{/* <Route exact path='/profile' component={Profile}/>*/}
					<Route exact path='/profile'
					       render={ () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> }/>
					<Route path='/dialogs'
					       render={ () => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
				</div>
				<Footer/>
			</div>
		
	);
}

export default App;
