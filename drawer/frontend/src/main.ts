import "./styles/reset.css";
import "./styles/style.css";

import { navigateTo, getRoute, getParams } from "./scripts/navigation";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";

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

const socket = io('http://localhost:3040')
socket.on(userId, (newLength) => { console.log('nova quantia - ', newLength) })