import React from "react";
import Vacansy from "./VacansyWords";

var VacansyWordsList = React.createClass({
	sortrray(){
		var arrayWords = this.props.vacancies.map(function(item){						
			return item.header.toLowerCase().replace(/-/g, " ").split(" ");
		});		
		var words = [];
		var getIndexWords = function(word){
			var result = -1;
			words.forEach(function(item, index){
				if(item.name == word){
					result = index;
				}
			});
			return result;
		}
		arrayWords.forEach(function(item){	
			item.forEach(function(word){
				var index = getIndexWords (word);
				if(index < 0){
					words.push({name:word, count: 1});
				}
				else{
					words[index].count += 1;
				}				
			});				
		});
		return words;
			
	},	
	funcSort(){
		var arr = this.sortrray();
		function compareCount(wordA, wordB) {
			return wordB.count - wordA.count;
		}
		arr.sort(compareCount);
		return arr;
		
	},
	render(){
		
		this.funcSort();
		
		return (

			<div>				
				<ul className="list">
				{
					this.funcSort().map(function(el, index){
						return <Vacansy key={index} title={el.name} count={el.count}/>;
					})						
				}
				</ul>
			</div>
			
		);
	}
});

export default VacansyWordsList;