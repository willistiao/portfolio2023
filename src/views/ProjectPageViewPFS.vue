<script setup>
import { ref } from 'vue'
</script>

<template>
	<div class="project__wrapper">
		<div class="about__section">
			<div class="about__section-title">
				<h1>Pixel Film Studios</h1>
				<h1>2019-2023</h1>
				<h1>UI Designer, Front End Developer</h1>
				<h1>Figma, SwiftUI, Final Cut Pro, Apple Motion</h1>
				<h1>Team: Vu Mai, Kien Hong, Colin Beur, Chloe Vasquez</h1>
			</div>
			<div class="about__section-body">
				<h1>
					Pixel Film Studios provides video editors a way to add complex motion
					graphics and 3D assets to their video projects, without the burden of
					having to be an expert in animation and 3D modeling. I worked with
					developers and UX designers to develop the first design system at
					Pixel Film Studios, including fonts, icons, custom components, and a
					centralized styleguide. This design system has created a more cohesive
					product ecosystem, helped reduce the length of the product development
					cycle and has helped instill the importance of design thinking in the
					company.
				</h1>
			</div>
		</div>

		<!-- Hero Image -->

		<!-- Section -->
		<div class="display__section">
			<div class="display__section-title">
				<h1 class="arrow_about">Ideation</h1>
			</div>
			<div class="display__section-content">
				<h1>
					Pixel Film Studios provides video editors a way to add complex motion
					graphics and 3D assets to their video projects, without the burden of
					having to be an expert in animation and 3D modeling. I worked with
					developers and UX designers to develop the first design system at
					Pixel Film Studios, including fonts, icons, custom components, and a
					centralized styleguide. This design system has created a more cohesive
					product ecosystem, helped reduce the length of the product development
					cycle and has helped instill the importance of design thinking in the
					company.
				</h1>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.project__wrapper {
	padding: 1.4em;
	padding-top: 15em;
}

.about__section {
	display: grid;
	grid-template-columns: 2fr 3.5fr;
	margin-bottom: 3em;

	&-title {
	}

	&-body {
		padding-right: 35%;

		span {
			display: block;
			margin-bottom: 1.5em;
		}
		ul {
			margin: 0;
			padding: 0;
		}
		li {
			list-style: none;
			margin-bottom: 0.1em;
		}

		a {
			display: block;
		}
	}
}

.display__section {
	display: grid;
	grid-template-columns: 1fr 5fr;
	margin-bottom: 3em;

	&-content {
		padding-right: 35%;
		border: solid 1px red;

		span {
			display: block;
			margin-bottom: 1.5em;
		}
		ul {
			margin: 0;
			padding: 0;
		}
		li {
			list-style: none;
			margin-bottom: 0.1em;
		}

		a {
			display: block;
		}
	}
}
</style>
