'use strict'

class Button {
	constructor(icon_name, id) {
    this.icon_name = icon_name
    this.id = id
  }

  create(){
    const BUTTON = document.createElement('div')
    const icon_holder = document.createElement('i')

    BUTTON.setAttribute('class', 'button')
    BUTTON.setAttribute('id', `${this.id}-button`)
    BUTTON.appendChild(icon_holder)

    icon_holder.dataset.lucide = this.icon_name

    return BUTTON
  }

  remove(){
    const BUTTON = document.getElementById(`${this.id}-button`)

    if(!BUTTON) return
    return BUTTON.remove()
  }
}

export { Button }
