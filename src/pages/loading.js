'use strict'

class Loading {
	render() {
		const is_loading_screen_exist = document.getElementById('loading-screen')
		if (is_loading_screen_exist) return

		const SCREEN = document.createElement('div')
		SCREEN.setAttribute('id', 'loading-screen')
		SCREEN.setAttribute('class', 'page')

		const icon = document.createElement('i')
		icon.dataset.lucide = getIconName()

		const text_holder = document.createElement('p')
		text_holder.textContent = getFact()

		SCREEN.appendChild(icon)
		SCREEN.appendChild(text_holder)

		const container = document.getElementById('app')

		container.appendChild(SCREEN)

		setTimeout(() => {
			this.remove()
		}, 3000)
	}

	remove() {
		const SCREEN = document.getElementById('loading-screen')

		if (!SCREEN) return
		return SCREEN.remove()
	}
}

function getFact() {
	const FACTS = [
		'Tic Tac Toe dates back to ancient Egypt over 3,000 years ago.',
		"It's known as 'Noughts and Crosses' in the UK.",
		'The game is played on a 3x3 grid.',
		"It is a two-player game with 'X' and 'O'.",
		'A player wins by placing three marks in a row.',
		"The game often ends in a draw, called a 'cat's game'.",
		"The first player ('X') has a slight advantage.",
		'There are 255,168 possible games, 46,080 unique ones.',
		"The best opening move for 'X' is the center square.",
		'Perfect play always ends in a draw.',
		'Symmetry makes some positions and moves equivalent.',
		"It's used to teach strategy and problem-solving.",
		'Programming Tic Tac Toe is a common beginner AI project.',
		'Variants include larger grids like 4x4 or 5x5.',
		"It's often featured in popular culture.",
		"Mathematically, it's a finite, perfect information game.",
		"'OXO', a Tic Tac Toe game, was one of the first computer games.",
		'The board can be found in many forms, from chalk to digital.',
		'Its simple rules make it universally understood.',
		'It provides insights into decision-making and strategy.',
	]

	const random_index = Math.floor(Math.random() * FACTS.length)
	return FACTS[random_index]
}

function getIconName() {
	const ICONS = [
		'x',
		'circle',
		'eclipse',
		'handshake',
		'heart',
		'blend',
		'party-popper',
	]

	const random_index = Math.floor(Math.random() * ICONS.length)
	return ICONS[random_index]
}

export { Loading }
