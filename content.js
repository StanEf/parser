console.log('content.js');
console.log(location.href);
// for(var i=0;i<10;i++){
	// console.log(i);
	// var interval = 1000 * i;
	// setTimeout(func, interval, i);
// }

// function func(index){
	// console.log('index ' + index);
// }



function elementParse(elem){
	var element = elem; 
	var o = document.createEvent('MouseEvents');  
	o.initMouseEvent( 'mouseover', true, true, window, 1, 12, 345, 7, 220, false, false, true, false, 0, null ); 
	element.dispatchEvent(o);
}


function startStrob(){
	console.log('startStrob');
	var i = 0;
	$('.video-item-link').each(function(){ 
		i++;
		var interval = 500 * i;
		setTimeout(elementParse, interval, this);
	});
	console.log('iii '+i);
}

function clickButton(){
	var elem = $('#show-more-videos-btn');
	for(var i=0;i<9;i++){
		//console.log(i);
		var interval = 30 * i;
		setTimeout(func, interval, elem);
	}
	var interval2 = 4300;
	setTimeout(startStrob, interval2);
}
function func(elem){
	console.log('click button');
	elem.trigger('click');
}	
clickButton();