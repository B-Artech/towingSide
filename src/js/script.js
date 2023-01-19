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
	function addShadow() {
		if (window.scrollY >= 30) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	function btnShadow() {
		if (window.scrollY >= 0) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	allNavItem.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
			burger.classList.remove('hide')
			xMark.classList.add('hide')
		})
	)
	const collapse = () => {
		navList.classList.remove('show')
		burger.classList.remove('hide')
		xMark.classList.add('hide')
	}
	logo.addEventListener('click', collapse)
	window.addEventListener('scroll', addShadow)
	btn.addEventListener('click', btnShadow)
})




