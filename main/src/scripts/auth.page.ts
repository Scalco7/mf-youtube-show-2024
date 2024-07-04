import { navigateTo } from "./navigation";

export default function renderAuthPage() {
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