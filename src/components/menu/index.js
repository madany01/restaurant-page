import { importAll } from '../../utils'
import menusData from './data.json'
import './style.css'


const imagesUrls = importAll(
	require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/i)
)


function createMenu({
	name,
	imageUrl,
	details,
	cost
}) {
	const nameEl = document.createElement('div')
	nameEl.classList.add('menu-name')
	nameEl.textContent = name

	const imageEl = new Image()
	imageEl.classList.add('menu-img')
	imageEl.src = imageUrl


	const detailsEl = document.createElement('div')
	detailsEl.classList.add('menu-details')
	detailsEl.textContent = details

	const costEl = document.createElement('div')
	costEl.classList.add('menu-cost')
	costEl.textContent = cost

	const menuEl = document.createElement('div')
	menuEl.classList.add('menu')
	menuEl.append(nameEl, imageEl, detailsEl, costEl)
	return menuEl
}




function render(parentEl) {
	const menuEls = menusData.map(menuData => {
		const imageUrl = imagesUrls[`./${menuData.imageName}`]
		return createMenu({
			...menuData,
			imageUrl
		})
	})

	const menuCtrEl = document.createElement('div')
	menuCtrEl.classList.add('menus')
	menuCtrEl.append(...menuEls)
	parentEl.append(menuCtrEl)
}



export default render
