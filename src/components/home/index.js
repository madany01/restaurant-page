import { importAll } from '../../utils'
import data from './data.json'
import './style.css'

function createHomeEl({ headline, testimonial, testimonialAuthor, imageUrl }) {
	const headlineEl = document.createElement('h1')
	headlineEl.classList.add('headline')
	headlineEl.textContent = headline

	const blockquoteEl = document.createElement('blockquote')
	blockquoteEl.classList.add('testimonial')
	blockquoteEl.textContent = testimonial

	const testimonialAuthorEl = document.createElement('div')
	testimonialAuthorEl.classList.add('testimonial-author')
	testimonialAuthorEl.textContent = testimonialAuthor

	const testimonialCtrEl = document.createElement('div')
	testimonialCtrEl.classList.add('testimonial-ctr')
	testimonialCtrEl.append(blockquoteEl, testimonialAuthorEl)

	const imageEl = new Image()
	imageEl.src = imageUrl

	const rowEl = document.createElement('div')
	rowEl.classList.add('row')
	rowEl.append(testimonialCtrEl, imageEl)

	const homeCtr = document.createElement('div')
	homeCtr.classList.add('home')
	homeCtr.append(headlineEl, rowEl)

	return homeCtr
}

const imagesUrls = importAll(
	require.context('./images', false, /\.(png|svg|jpg|jpeg|gif)$/i)
)

function render(parentEl) {
	const imageUrl = imagesUrls[`./${data.imageName}`]
	parentEl.append(createHomeEl({ ...data, imageUrl }))
}

export default render
