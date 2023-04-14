<script setup></script>

<template>
	<div class="scroll-container">
		<div class="about__wrapper">
			<div class="about__section">
				<div class="about__section-title">
					<h1 class="arrow_about">me</h1>
				</div>
				<div class="about__section-body">
					<h1>
						<span>Hi, my name is Willis.</span>
						<span>
							As a <bold>UI Designer</bold> and
							<bold>Front End Developer</bold> with a background in mechanical
							engineering, I am passionate about exploring the intersection of
							physical and digital experiences. I enjoy breaking down complex
							systems and strive to create designs that are both engaging and
							feasible.
						</span>
						<span>
							In my free time I enjoy taking photos, making music, and surfing!
						</span>
					</h1>
				</div>
			</div>
			<div class="about__section">
				<div class="about__section-title">
					<h1 class="arrow_about">skills</h1>
				</div>
				<div class="about__section-body">
					<ul>
						<li>UI Design</li>
						<li>Animation, Motion</li>
						<li>HTML/CSS, Javascript</li>
						<li>Blender</li>
						<li>Spark AR</li>
					</ul>
				</div>
			</div>
			<div class="about__section">
				<div class="about__section-title">
					<h1 class="arrow_about">contact</h1>
				</div>
				<div class="about__section-body">
					<h1>
						<a href="#">email</a>
						<a href="#">linkedin</a>
						<a href="#">github</a>
						<a href="#">resume</a>
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about__wrapper {
	padding: 1.4em;
	padding-top: 20em;
}

.about__section {
	display: grid;
	grid-template-columns: 1fr 3fr;
	margin-bottom: 3em;

	&-title {
	}

	&-body {
		padding-right: 30%;

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
			width: auto;
		}
	}
}
</style>
