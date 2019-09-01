import Vue from 'vue'
import router from '../router/index'
import App from './app.vue'

const app = new Vue({
	el: '#app',
	router,
	template: '<App/>'
})

window.app = app

export default app
