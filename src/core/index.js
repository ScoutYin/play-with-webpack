import Vue from 'vue'
import router from '../router/index'
import App from './app.vue'

Vue.config.productionTip = false

const app = new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})

window.app = app
