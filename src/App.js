import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Сontent/Profile/Profile";
import Dialogs from "./components/Сontent/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				{/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
				<Header/>
				<Navbar/>
				<div className='app-wrapper-content'>
					<Route path='/profile' component={Profile}/>
					<Route path='/dialogs' component={Dialogs}/>
				</div>
				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
