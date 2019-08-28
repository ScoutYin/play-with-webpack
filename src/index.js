
const hello = () => {
	const div = document.createElement('div')

	div.innerHTML = 'Hello Webpack'
	document.body.appendChild(div)
}

hello()