'use strict'

class Square {
	constructor(index) {
		this.index = index
	}

	create() {
		const is_square_exist = document.getElementByID(`square-${index}`)
		if (is_square_exist) return

		const SQUARE = document.createElement('div')
		SQUARE.setAttribute('id', `square-${index}`)
		SQUARE.setAttribute('class', `square`)
		SQUARE.textContent = null

		SQUARE.addEventListener('click', () => {
			this.addMark()
		})

		return SQUARE
	}

	remove() {
		const SQUARE = document.getElementByID(`square-${index}`)
		if (SQUARE) return

		return SQUARE.remove()
	}
}

export { Square }
