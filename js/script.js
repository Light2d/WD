const menuLinks = document.querySelectorAll(".header-link[data-goto]");

if(menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLink);
	});
}
	function onMenuLink(e){
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = goto.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;

			window. scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}

// меню бургер

const menuBurger = document.querySelector('.menu-burger');
const menuBody = document.querySelector('.menu-body');

if(menuBurger){
	menuBurger.addEventListener('click', function(e){
		document.body.classList.toggle('lock');
		menuBurger.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}


