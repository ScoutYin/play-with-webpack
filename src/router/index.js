import Vue from 'vue'
import Router from 'vue-router'
import helloConfig from './modules/hello'

Vue.use(Router)

export default new Router({
	routes: [
		...helloConfig,
		{
			path: '*',
			redirect: '/hello'
		}
	]
})