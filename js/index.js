const MENU_TOP_BORDER = 500;
const $menu = document.querySelector('nav');

window.addEventListener('scroll', function() {
	if (window.document.body.scrollTop > MENU_TOP_BORDER) {
    	$menu.classList.remove('bottom');
		$menu.classList.add('top');
	} else {
    	$menu.classList.remove('top');
		$menu.classList.add('bottom');
    }
});

