import React from "react";
import Vacansy from "./Vacansy";

var VacansyList = React.createClass({
	render(){
		console.log(this.props);
		return (

			<div>				
				<ul className="list">
				{

					this.props.categories.map(function(el, index){
					return <Vacansy key={index} title={el.title} count={el.count}/>;
					})	
				}
				</ul>
			</div>
			
		);
	}
});

export default VacansyList;