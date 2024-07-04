import { getRoute, navigateTo } from './scripts/navigation';
import { getUserName, validateToken } from './scripts/token-utils';
import './styles/reset.css'
import './styles/style.css'


const route = getRoute()
const token = localStorage.getItem('token')

if (!validateToken(token)) {
    if (route == '/auth') {
        renderAuthPage()
    } else {
        navigateTo('/auth')
    }
} else {
    if (route == '/auth') {
        renderAuthPage()
    }
    else if (route == '/videos' || route == '/favoritos') {
        renderHomePage()
    }
    else {
        navigateTo('/videos')
    }
}

function renderAuthPage() {
    const authUrl = import.meta.env.VITE_LOGIN_URL
    const authIframe: HTMLIFrameElement = document.createElement('iframe');
    authIframe.src = authUrl;
    authIframe.width = "100%";
    authIframe.height = "100%";

    const containerElement: HTMLElement | null = document.getElementById('app');
    containerElement!.appendChild(authIframe);

    window.addEventListener('message', (event) => {
        const messageData = event.data;
        if (messageData.action === 'onAuth') {
            localStorage.setItem('token', messageData.token)
            navigateTo('/videos');
        }
    });
}

function renderHomePage() {
    const subtractImg: HTMLImageElement = document.createElement('img')
    subtractImg.id = 'subtract-img'
    subtractImg.src = './subtract.svg'
    const body = document.getElementsByTagName('body')[0]
    body.appendChild(subtractImg)

    const userName = getUserName(token)
    const headerElement: HTMLElement = document.createElement('header')
    headerElement.innerHTML = `
        <div>
          <p>Olá <span>${userName}</span>,</p>
          <p>Confira seus vídeos <span>favoritos</span> abaixo</p>
        </div>
        <img id="logo-img" src="./logo-complete.svg" />
    `

    const drawerIframe: HTMLIFrameElement = document.createElement('iframe');
    const drawerUrl = import.meta.env.VITE_DRAWER_URL
    drawerIframe.id = 'drawer-iframe'
    drawerIframe.src = `${drawerUrl}${route}?token=${token}`;

    const videoUrl = import.meta.env.VITE_VIDEO_URL
    const videoIframe: HTMLIFrameElement = document.createElement('iframe');
    videoIframe.src = `${videoUrl}${route}?token=${token}`;
    videoIframe.width = "100%";
    videoIframe.height = "100%";

    const containerElement: HTMLElement = document.createElement('main');
    containerElement!.appendChild(drawerIframe);
    containerElement!.appendChild(videoIframe);

    const appElement: HTMLElement | null = document.getElementById('app');
    appElement!.appendChild(headerElement);
    appElement!.appendChild(containerElement);

    window.addEventListener('message', (event) => {
        const messageData = event.data;
        if (messageData.action === 'changeRoute') {
            navigateTo(messageData.route);
        }
    });
}
