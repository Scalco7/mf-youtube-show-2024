import "./styles/reset.css";
import "./styles/style.css";

import { navigateTo, getRoute, getParams } from "./scripts/navigation";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import getFavoriteQuantity from "./scripts/api/getFavoriteQuantity";

const favoriteNumberBox = document.getElementById('favorite-number-circle')

const params = getParams();
const token = params.get('token')
let userId = ''

if (token) {
  userId = (jwtDecode(token) as any).id
  localStorage.setItem('token', token)
}

const videoButton = document.getElementById("video-button");
const favoriteButton = document.getElementById("favorite-button");

videoButton!.addEventListener("click", () => {
  navigateTo("videos");
});

favoriteButton!.addEventListener("click", () => {
  navigateTo("favoritos");
});

document.addEventListener("DOMContentLoaded", () => {
  const route = getRoute();

  if (route == "/videos") {
    videoButton?.classList.add("current");
  } else if (route == "/favoritos") {
    favoriteButton?.classList.add("current");
  }
});

getFavoriteQuantity().then((quantity) => {
  favoriteNumberBox!.innerText = quantity.toString()
})

const apiUrl = import.meta.env.VITE_API_URL
const socket = io(apiUrl)
socket.on(userId, handleNewFavoriteQuantity)

function handleNewFavoriteQuantity(newQuantity: number) {
  favoriteNumberBox!.innerText = newQuantity.toString()
}