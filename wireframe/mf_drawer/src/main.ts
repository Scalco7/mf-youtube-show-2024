import './styles/reset.css'
import './styles/style.css'

import { navigateTo, getRoute } from './scripts/navigation'

const videoButton = document.getElementById('video-button')
const favoriteButton = document.getElementById('favorite-button')

videoButton!.addEventListener('click', () => {
  navigateTo('videos')
})

favoriteButton!.addEventListener('click', () => {
  navigateTo('favoritos')
})