import Vue from 'vue'
import router from '../router/index'
import App from './app.vue'

Vue.config.productionTip = false

const app = new Vue({
	el: '#app',
	router,
	components: { App },
	// template: '<App/>',
	render (h) {
		return (
			<div id="app">
				<App/>
			</div>
		)
	}
})

window.app = app

const bar = {
	a: {
		b: 1
	}
}

const b = bar?.c?.b
console.log(b);
