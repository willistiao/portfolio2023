<script setup>
import { ref, computed } from 'vue'
import ProjectListItem from '../components/ProjectListItem.vue'

const currentTime = ref(new Date())

const timeString = computed(() => {
	let hours = currentTime.value.getHours()

	let timeText = 'placeholder'
	if (hours >= 6 && hours < 8) {
		timeText = 'having breakfast of champions ☕️'
	} else if (hours >= 8 && hours < 13) {
		timeText = 'clacking away 💻'
	} else if (hours >= 13 && hours < 19) {
		timeText = 'chilling 🎶'
	} else if (hours >= 19 && hours < 20) {
		timeText = 'wining and dining 🍷'
	} else if (hours >= 20 && hours < 24) {
		timeText = 'getting some beauty sleep 😴'
	} else if (hours >= 0 && hours < 6) {
		timeText = 'getting some beauty sleep 😴'
	}

	let amPm = 'AM'
	if (hours > 12) {
		hours -= 12
		amPm = 'PM'
	}

	function addZero(x) {
		if (x < 10) {
			return (x = '0' + x)
		} else {
			return x
		}
	}

	hours = addZero(hours)
	const minutes = currentTime.value.getMinutes().toString().padStart(2, '0')
	const seconds = currentTime.value.getSeconds().toString().padStart(2, '0')

	return `${hours}:${minutes}:${seconds} ${amPm} ... ${timeText}`
})

setInterval(() => {
	currentTime.value = new Date()
}, 1000)
</script>

<template>
	<main>
		<div class="scroll-container">
			<div class="project-list__wrap">
				<div class="info__wrap">
					<h1>Product Designer + Front End Developer</h1>
					<h1>
						<span>{{ timeString }}</span>
					</h1>
				</div>
				<ProjectListItem />
			</div>
		</div>
		<div class="footer__wrap">
			<div class="footer">
				<h1>© 2023 Willis Tiao</h1>
				<h1>
					<a href="">email</a>, <a href="">github</a>,
					<a href="">linkedin</a>
				</h1>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.info__wrap {
	padding: 0 1em;
}
.project-list__wrap {
	padding-top: 10rem;
}

.footer__wrap {
	padding: 0 1em;

	.footer {
		display: grid;
		grid-template-columns: 1fr 1fr 5fr;
	}
}
</style>
