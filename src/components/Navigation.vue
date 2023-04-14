<script setup></script>

<template>
	<nav class="nav">
		<div class="nav__logo">
			<h1>
				<div class="red-circle"></div>
				WILLIS TIAO
			</h1>
		</div>
		<ul class="nav__list">
			<li class="nav__item">
				<router-link to="/" class="nav__link">Work</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/about" class="nav__link">Info</router-link>
			</li>
			<li class="nav__item">
				<router-link to="/play" class="nav__link">Play</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.nav {
	width: 100%;
	position: fixed;
	z-index: 1000;
	padding: 3em 1em 1em 1em;
	display: grid;
	align-content: center;
	grid-auto-flow: column;
	grid-template-columns: 1fr 3fr;

	&__logo {
		justify-content: start;

		h1 {
			display: flex;
			align-items: center;
		}
		.red-circle {
			display: inline-block;
			width: 0.7em;
			height: 0.7em;
			background-color: red;
			border-radius: 50%;
			margin-right: 10px;
		}
	}

	&__list {
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		list-style: none;
	}

	&__link {
		text-transform: uppercase;
	}
}

.spacer {
	height: 6em;
}
</style>
