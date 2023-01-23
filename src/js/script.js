document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItem = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')
	const btn = document.querySelector('.navbar-toggler')
	const logo = document.querySelector('.navbar-brand')
	const burger = document.querySelector('.fas')
	const xMark = document.querySelector('.fax')

	btn.addEventListener('click', () => {
		burger.classList.toggle('hide')
		xMark.classList.toggle('hide')
	})

	window.addEventListener('scroll', () => {
        if (window.scrollY >= 30) {
            nav.classList.add('shadow-bg');
        } else {
            nav.classList.remove('shadow-bg');
        }
    });

	btn.addEventListener('click', () => {
		if(window.scrollY >= 0){
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
		
	})

	allNavItem.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
			burger.classList.remove('hide')
			xMark.classList.add('hide')
		})
	)

	logo.addEventListener('click', () => {
        navList.classList.remove('show');
		burger.classList.remove('hide')
		xMark.classList.add('hide')
    });

})



