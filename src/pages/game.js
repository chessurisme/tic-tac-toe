'use strict'

class Game {
	constructor() {
		this.turn = localStorage.getItem('turn')
	}
}

export { Game }
