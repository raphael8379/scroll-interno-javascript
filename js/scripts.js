// JavaScript Document



// 1
// caso tenha um link direcionando para fora da pg, ele não vai pegar este link.... só o que começa com #
const menuItems = document.querySelectorAll('.menu a[href^="#"]');



//2
menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});




//3 
function scrollToIdOnClick(event) {
	event.preventDefault();
	const element = event.target;
	const id = element.getAttribute('href');
	const to = document.querySelector(id).offsetTop;
	
	window.scroll({
		top:to,
		behavior:"smooth",
				  });
	
	}
	
