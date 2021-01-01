import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
	{id: 1, message: 'I live with my parents.', likesCount: 3},
	{id: 2, message: 'Tonight he’s going out with his girlfriend.', likesCount: 0},
	{id: 3, message: 'I watch special programmes on the television and work at home.', likesCount: 13},
	{id: 4, message: 'Hi, my name is Vitaliy and I come from Australia.', likesCount: 1},
]

let dialogsData = [
	{id: 1, name: 'Dmitriy'},
	{id: 2, name: 'Andrey'},
	{id: 3, name: 'Romka'},
	{id: 4, name: 'Sveta'},
	{id: 5, name: 'Pete'},
]

let messagesData = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'How is your live'},
	{id: 3, message: 'way'},
	{id: 4, message: 'yo'},
	{id: 5, message: 'yo yo'},
]

ReactDOM.render(
	<React.StrictMode>
		<App posts={postsData} dialogs={dialogsData} messages={messagesData}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
