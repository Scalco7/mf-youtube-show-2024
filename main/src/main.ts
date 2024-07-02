import { getRoute, navigateTo } from './scripts/navigation';
import validateToken from './scripts/validate-token';
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
    const authIframe: HTMLIFrameElement = document.createElement('iframe');
    authIframe.src = `http://localhost:5174`;
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
    const drawerIframe: HTMLIFrameElement = document.createElement('iframe');
    drawerIframe.src = `http://localhost:5175${route}?token=${token}`;
    drawerIframe.width = "250px";
    drawerIframe.height = "100%";

    const videoIframe: HTMLIFrameElement = document.createElement('iframe');
    videoIframe.src = `http://localhost:5176${route}?token=${token}`;
    videoIframe.width = "100%";
    videoIframe.height = "100%";

    const containerElement: HTMLElement | null = document.getElementById('app');
    containerElement!.appendChild(drawerIframe);
    containerElement!.appendChild(videoIframe);

    window.addEventListener('message', (event) => {
        const messageData = event.data;
        if (messageData.action === 'changeRoute') {
            navigateTo(messageData.route);
        }
    });
}
