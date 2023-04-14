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

		<!-- Overview -->
		<div class="overview__section">
			<div>
				<h1>The Problem</h1>
				<p>
					Furnishing a new room or apartment can be tough- whether it's because
					one doesn't have the time, the eye for it, or the care to do so.
					Consequently, their living space can feel incohesive and haphazardly
					planned.
				</p>
				<div class="spacer"></div>
				<h1>The Objective</h1>
				<p>
					We asked - “How can we make the room furnishing process easier and
					help people make more thoughtful furnishing choices?“
				</p>
			</div>
			<div>
				<h1>The Solution</h1>
				<p>
					The concept for our app is pretty simple, so we recognized that the
					main factor of success for our design would be in how we laid out the
					data collection process for the user. <br /><br />
					Being an IKEA application, our design needed to fit within their
					product ecosystem. Using IKEA's established branding, we explored ways
					to elevate their traditionally 2D aesthetic and create an experience
					that felt refreshing but still familiar.
				</p>
			</div>
		</div>

		<!-- Section -->
		<div class="display__section">
			<div class="display__section-title">
				<h1></h1>
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
		// padding-right: 35%;
		max-width: 750px;

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

.overview__section {
	display: grid;
	grid-template-columns: 1fr 1fr;

	p {
		max-width: 600px;
	}
}
.display__section {
	display: grid;
	grid-template-columns: 1fr 5fr;
	margin-bottom: 3em;

	&-content {
		// padding-right: 35%;
		border: solid 1px red;

		h1 {
		}

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
