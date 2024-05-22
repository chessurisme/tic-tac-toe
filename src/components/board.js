'use strict'

import { Square } from './square'

class Board {
	create() {
		const is_board_exist = document.getElementById('board')
		if (is_board_exist) return

		const BOARD = document.createElement('div')
		BOARD.setAttribute('id', 'board')

		const SQUARE_ONE = new Square('1').create()
		const SQUARE_TWO = new Square('2').create()
		const SQUARE_THREE = new Square('3').create()
		const SQUARE_FOUR = new Square('4').create()
		const SQUARE_FIVE = new Square('5').create()
		const SQUARE_SIX = new Square('6').create()
		const SQUARE_SEVEN = new Square('7').create()
		const SQUARE_EIGHT = new Square('8').create()
		const SQUARE_NINE = new Square('9').create()

		BOARD.appendChild(SQUARE_ONE)
		BOARD.appendChild(SQUARE_TWO)
		BOARD.appendChild(SQUARE_THREE)
		BOARD.appendChild(SQUARE_FOUR)
		BOARD.appendChild(SQUARE_FIVE)
		BOARD.appendChild(SQUARE_SIX)
		BOARD.appendChild(SQUARE_SEVEN)
		BOARD.appendChild(SQUARE_EIGHT)
		BOARD.appendChild(SQUARE_NINE)

		return BOARD
	}

	remove() {
		const BOARD = document.getElementById('board')
		if (!BOARD) return
		return BOARD.remove()
	}
}

export { Board }
