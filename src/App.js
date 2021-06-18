import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import Form from './components/form';

export default class App extends Component {
	render() {
		return (
			<div className='container mt-3'>
				<Navigation />
				<Form />
			</div>
		);
	}
}
