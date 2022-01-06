import { importAll } from '../../utils'
import data from './data.json'
import './style.css'

function createAboutEl({ phone, email, location, imageUrl }) {
	const infoEl = document.createElement('div')
	infoEl.classList.add('info')
	infoEl.append(...([phone, email, location].map(content => {
		const div = document.createElement('div')
		div.textContent = content
		return div
	})))

	const imageEl = new Image()
	imageEl.src = imageUrl

	const aboutEl = document.createElement('div')
	aboutEl.classList.add('about')

	aboutEl.append(infoEl, imageEl)

	return aboutEl
}

const imagesUrls = importAll(
	require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/i)
)

function render(parentEl) {
	const imageUrl = imagesUrls[`./${data.imageName}`]
	parentEl.append(createAboutEl({ ...data, imageUrl }))
}

export default render
