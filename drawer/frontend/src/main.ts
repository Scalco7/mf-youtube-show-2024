import "./styles/reset.css";
import "./styles/style.css";

import { navigateTo, getRoute, getParams } from "./scripts/navigation";

const params = getParams();
const token = params.get('token')

if (token)
  localStorage.setItem('token', token)

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


const socket = new WebSocket(`ws://localhost:3040/?token=${localStorage.getItem('token')}`);

socket.onopen = () => {
  console.log('Conexão WebSocket aberta');
  // Enviando uma mensagem ao servidor
  socket.send('Olá, servidor!');
};

// Evento disparado quando uma mensagem é recebida do servidor
socket.onmessage = (event) => {
  console.log('Mensagem recebida: ', event.data);
};

// Evento disparado quando a conexão é fechada
socket.onclose = () => {
  console.log('Conexão WebSocket fechada');
};

// Evento disparado em caso de erro
socket.onerror = (error) => {
  console.error('Erro no WebSocket: ', error);
};