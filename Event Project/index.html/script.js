

/// Event Bubbling
let button = document.getElementById('button');
let childDiv = document.getElementById('childDiv');
let parentDiv = document.getElementById('parentDiv');


button.addEventListener('click',(event)=>{
	event.stopPropagation()
	console.log("button clicked");
} )
 childDiv.addEventListener('click',()=>{
	 console.log("chidDiv clicked");
	 
 })

parentDiv.addEventListener('click',()=>{
	console.log("parentDiv clicked");
})
//** */ Event Capturing  
//let button = document.getElementById('button');
//let childDiv = document.getElementById('childDiv');
//let parentDiv = document.getElementById('parentDiv');


//button.addEventListener('click',(event)=>{
//	event.stopPropagation()
//	console.log("button clicked");
///},true )
// childDiv.addEventListener('click',()=>{
//	 console.log("chidDiv clicked");
	 
 //},true)

//parentDiv.addEventListener('click',()=>{
//	console.log("parentDiv clicked");
//},true)
