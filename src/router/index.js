import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PlayView from '../views/PlayView.vue'
import ProjectPageViewPFS from '../views/ProjectPageViewPFS.vue'
import ProjectPageViewInMuseum from '../views/ProjectPageViewInMuseum.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
		{
			path: '/play',
			name: 'play',
			component: PlayView,
		},
		{
			path: '/new-page',
			name: 'new page',
			component: ProjectPageViewPFS,
		},
		{
			path: '/inmuseum',
			name: 'In Museum',
			component: ProjectPageViewInMuseum,
		},
	],
})

export default router
