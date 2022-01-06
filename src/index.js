import renderMenu from './components/menu/index'
import renderHome from './components/home/index'
import renderAbout from './components/about/index'

const homeTabBtn = document.querySelector('.home-tab')
const menuTabBtn = document.querySelector('.menus-tab')
const aboutTabBtn = document.querySelector('.about-tab')
const tabBtns = [homeTabBtn, menuTabBtn, aboutTabBtn]
const mainEl = document.querySelector('.main-content')

function bindEvents () {
	homeTabBtn.addEventListener('click', switchToHomeTab)
	menuTabBtn.addEventListener('click', switchToMenuTab)
	aboutTabBtn.addEventListener('click', switchToAboutTab)
}

function unselectAllTabs () {
	tabBtns.forEach(btn => btn.classList.remove('selected'))
}

function clearMainEl () {
	mainEl.innerHTML = ''
}

function switchToHomeTab () {
	unselectAllTabs()
	homeTabBtn.classList.add('selected')
	clearMainEl()
	renderHome(mainEl)
}

function switchToMenuTab () {
	unselectAllTabs()
	menuTabBtn.classList.add('selected')
	clearMainEl()
	renderMenu(mainEl)
}
function switchToAboutTab () {
	unselectAllTabs()
	aboutTabBtn.classList.add('selected')
	clearMainEl()
	renderAbout(mainEl)
}

bindEvents()
switchToHomeTab()
