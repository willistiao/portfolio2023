<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import Navigation from './components/Navigation.vue'
</script>

<template>
	<main>
		<Navigation />

		<div>
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</div>
	</main>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transition: opacity 0.5s ease;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 300ms cubic-bezier(0.18, 0, 0.06, 0.99);
}
</style>
