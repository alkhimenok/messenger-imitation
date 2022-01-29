export const setSidebarHeight = () => {
	const $header = document.querySelector('#header')
	const $sidebarSearch = document.querySelector('#sidebarSearch')
	const $sidebarNav = document.querySelector('#sidebarNav')
	const $sidebarList = document.querySelector('#sidebarList')

	const height = window.innerHeight - $header.clientHeight - $sidebarSearch.clientHeight - $sidebarNav.clientHeight

	$sidebarList.style.height = height - 4 + 'px'

	window.addEventListener(`resize`, setSidebarHeight)
}
