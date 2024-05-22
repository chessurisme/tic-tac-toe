'use strict'

class Home {
	render(){
		const is_home_screen_exist = document.getElementById('home-screen')
		if (is_home_screen_exist) return

		const SCREEN = document.createElement('div')
		SCREEN.setAttribute('id', 'home-screen')
		SCREEN.setAttribute('class', 'page')

		
	}
		
	remove(){
		
	}
}

export { Home }
 