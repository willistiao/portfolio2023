<script setup>
import { ref, computed, defineComponent } from 'vue'
import projectData from '../assets/projectData.json'

const projects = ref(projectData)
const cursor = ref('')
</script>

<template>
	<div class="projects-list" v-for="project in projects" :key="project.id">
		<div class="projects-list__item">
			<div class="projects-list__image">
				<img :src="project.image" />
			</div>
			<div class="projects-list__details">
				<h1>
					<span class="arrow_pointer">{{ project.title }}</span
					>{{ project.year }}<br />
				</h1>
				<h2>
					<span>{{ project.role }}</span>
				</h2>
				<p>
					{{ project.description }}
				</p>
				<router-link :to="`/${project.link}`" class="projects-list__link"
					><span class="arrow_link">{{ project.cursorText }}</span></router-link
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.projects-list {
	padding: 1em;
	// padding-top: 10em;
	&__item {
		display: grid;
		margin-bottom: 2em;
		grid-template-columns: 2fr 1fr;

		.projects-list__image {
			margin-right: 30px;

			img {
				width: 100%;
			}
		}
	}

	&__thumbnail {
		width: 100%;
		max-width: 100%;
		height: auto;
	}

	&__details {
		h1 {
			margin-bottom: 0.5em;
		}
		h2 {
			margin-top: -1.2em;
			margin-bottom: 2em;

			span {
			}
		}
		p {
			margin-bottom: 4em;
			padding-right: 2em;
			line-height: 1.3em;
		}
		a {
			font-weight: 300;
			font-size: 1.4em;
		}
	}

	// Custom Cursor
	.custom-cursor {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;
		pointer-events: none;
		padding: 10px;
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		opacity: 0;
		transition: opacity 0.3s ease-out;
	}
}
</style>
