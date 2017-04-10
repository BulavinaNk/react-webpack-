import React from "react";
import ReactDOM from "react-dom";
import VacansyList from "./components/VacansyList";
import VacansyWordsList from "./components/VacansyWordsList";
var App = React.createClass({

	componentDidMount(){

		var self = this;
		console.log("componentDidMount");
		fetch('https://api.zp.ru/v1/vacancies/?average_salary=true&categories_facets=true&geo_id=826&highlight=true&is_new_only=true&period=today&search_type=fullThrottle&sort=date&state=1')
	  	.then(function(response) {
	  		return response.json();

  		}).then(function(result){
  			self.loadData(result);
  			//console.log(result);
  		});			  		

	},
	getInitialState: function() {
    	return {
     		categories: [],
     		vacancies: []

    	};
  	},
  	loadData: function(data){
  		//this.setState({ data: data });
  		this.setState({
  			categories: data.metadata.categories_facets,
  			vacancies: data.vacancies

  		})
  		

  	},

	render(){
		console.log("render");
		return (
			<div>
				<div>Hello!</div>
				<VacansyList categories={this.state.categories}/>
				<VacansyWordsList vacancies={this.state.vacancies}/>


			</div>
		);

	}
	
});


ReactDOM.render(
	<App/>,
	document.getElementById('app')
);


var a = "Nina";
console.log(a);