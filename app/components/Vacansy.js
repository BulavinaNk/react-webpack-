import React from "react";

var Vacansy = React.createClass({
	render: function(){
		return (
			<li>
				<div>{this.props.title}</div>				
				<div className="bold">{this.props.count}</div>				
			</li>);
		}
});

export default Vacansy;