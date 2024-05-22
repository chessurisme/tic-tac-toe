'use strict'

class ScoreBoard {
	constructor() {
		this.x_score = localStorage.getItem('x-score')
		this.o_score = localStorage.getItem('o-score')
		this.draw = localStorage.getItem('draw')
	}

	create() {
		const is_score_board_exist = document.getElementById('score-board')

		if (is_score_board_exist) return

		const SCORE_BOARD = document.createElement('div')
		SCORE_BOARD.setAttribute('id', 'score-board')

		const x_score_board = document.createElement('div')
		const x_text_holder = document.createElement('p')
		const x_score_holder = document.createElement('p')
		x_text_holder.textContent = 'X'
		x_score_holder.textContent = 0

		x_score_board.appendChild(x_text_holder)
		x_score_board.appendChild(x_score_board)

		const o_score_board = document.createElement('div')
		const o_text_holder = document.createElement('p')
		const o_score_holder = document.createElement('p')
		o_text_holder.textContent = 'O'
		o_score_holder.textContent = 0

		o_score_board.appendChild(o_text_holder)
		o_score_board.appendChild(o_score_board)

		const draw_score_board = document.createElement('div')
		const draw_text_holder = document.createElement('p')
		const draw_score_holder = document.createElement('p')
		draw_text_holder.textContent = 'Draw'
		draw_score_holder.textContent = 0

		draw_score_board.appendChild(draw_text_holder)
		draw_score_board.appendChild(draw_score_board)

		SCORE_BOARD.appendChild(x_score_board)
		SCORE_BOARD.appendChild(o_score_board)
		SCORE_BOARD.appendChild(draw_score_board)

		return SCORE_BOARD
	}

	remove() {
		const SCORE_BOARD = document.getElementById('score-board')

		if (!SCORE_BOARD) return
		return SCORE_BOARD.remove()
	}
}

export { ScoreBoard }
