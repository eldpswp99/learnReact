import React from 'react';

function Food({name,picture}){
	
	return <div>
		<h1>I like {name}</h1>
		<img src = {picture} />
	</div>
}

const foodILike = [
	{
		name : "Kimchi",
		image : "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg"
	},
	{
		name : "Samgyeopsal",
		image : 'https://img.siksinhot.com/article/1545979628082002.jpg'
	},
	{
		name : "bibimbap",
		image : 'http://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg'
	},
	{
		name : "donkatsu",
		image : "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2019%2F09%2Ftonkatsu-mania-pork-cutlet-seoul-restaurant-2.jpg?q=75&w=745&cbr=1&fit=max"
	},
	{
		name : "Kimbap",
		image : "http://www.nongsaro.go.kr/ps/img/interabang/num207/headerImg.jpg"
	}	
];

function App() {
	return (
		<div>
			{foodILike.map(dish => {
				return <Food name = {dish.name} picture = {dish.image}/>
			})}
		</div>
	);
}

export default App;
