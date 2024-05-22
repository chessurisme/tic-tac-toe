'use strict'

import { createLucideIcons } from './utilities/lucide-create-icons'
import { Loading } from './pages/loading'
import { Home } from './pages/home'
import { Game } from './pages/game'

function initializeApp() {
	new Loading().render()
	new Home().render()
	new Game().render()

	createLucideIcons()
	return true
}

initializeApp()
