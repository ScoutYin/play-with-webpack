import dayjs from 'dayjs'

const hello = () => {
	const div = document.createElement('div')

	const nowTime = dayjs().format('YYYY-MM-DD')

	div.innerHTML = `${nowTime} Hello Webpack !`
	document.body.appendChild(div)
}

hello()