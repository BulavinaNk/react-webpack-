import React from "react";

var VacansyWords = React.createClass({
	render: function(){
		return (
			<li>
				<div>{this.props.title}</div>				
				<div>{this.props.count}</div>				
			</li>);
		}
});

export default VacansyWords;