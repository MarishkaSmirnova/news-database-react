import React from 'react';
import './App.css';

class CurrentYear extends React.Component {
	render() {
		return <span>{(new Date().getFullYear())}</span>;
	}
}

export default CurrentYear;