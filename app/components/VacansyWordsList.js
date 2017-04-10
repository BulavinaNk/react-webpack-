import React from "react";
import Vacansy from "./VacansyWords";

var VacansyWordsList = React.createClass({
	findArray(){
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
				if(words.length < 1){
					words.push({name:word, count: 1});
				}
				else if(index < 0){
					words.push({name:word, count: 1});
				}
				else{
					words[index].count += 1;
				}				
			});				
		});
		return words;
		console.log(words);		
	},	
	funcSort(){
		var arr = this.findArray();
		function compareCount(wordA, wordB) {
			return wordB.count - wordA.count;
		}
		arr.sort(compareCount);
		return arr;
		console.log(arr);
	},
	render(){
		//this.findArray();
		this.funcSort();
		console.log(this.props);
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