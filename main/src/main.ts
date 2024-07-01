import { getRoute, navigateTo } from './scripts/navigation';
import './styles/reset.css'
import './styles/style.css'

const token = localStorage.getItem('token')

const drawerIframe: HTMLIFrameElement = document.createElement('iframe');
drawerIframe.src = `http://localhost:5175${getRoute()}?token=${token}`;
drawerIframe.width = "250px";
drawerIframe.height = "100%";

const videoIframe: HTMLIFrameElement = document.createElement('iframe');
videoIframe.src = `http://localhost:5174${getRoute()}?token=${token}`;
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
