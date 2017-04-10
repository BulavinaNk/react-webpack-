import React from "react";

var Vacansy = React.createClass({
	render: function(){
		return (
			<li>
				<div>{this.props.title}</div>				
				<div>{this.props.id}</div>				
			</li>);
		}
});

export default Vacansy;