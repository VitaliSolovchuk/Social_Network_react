import {rerenderEntireTree} from "../render";

let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'I live with my parents.', likesCount: 3},
			{id: 2, message: 'Tonight he’s going out with his girlfriend.', likesCount: 0},
			{id: 3, message: 'I watch special programmes on the television and work at home.', likesCount: 13},
			{id: 4, message: 'Hi, my name is Vitaliy and I come from Australia.', likesCount: 1},
		],
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Dmitriy'},
			{id: 2, name: 'Andrey'},
			{id: 3, name: 'Romka'},
			{id: 4, name: 'Sveta'},
			{id: 5, name: 'Pete'},
		],
		messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message: 'How is your live'},
			{id: 3, message: 'way'},
			{id: 4, message: 'yo'},
			{id: 5, message: 'yo yo'},
		],
	},
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 1,
	}
	state.profilePage.posts.push(newPost)
	rerenderEntireTree(state)
}

export default state