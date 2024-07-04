import { navigateTo } from "./navigation"
import { getUserName } from "./token-utils"

export default function renderHomePage(userToken: string, appRoute: string) {
    const subtractImg: HTMLImageElement = document.createElement('img')
    subtractImg.id = 'subtract-img'
    subtractImg.src = './subtract.svg'

    const userName = getUserName(userToken)
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
    drawerIframe.src = `${drawerUrl}${appRoute}?token=${userToken}`;

    const videoUrl = import.meta.env.VITE_VIDEO_URL
    const videoIframe: HTMLIFrameElement = document.createElement('iframe');
    videoIframe.src = `${videoUrl}${appRoute}?token=${userToken}`;
    videoIframe.width = "100%";
    videoIframe.height = "100%";

    const containerElement: HTMLElement = document.createElement('main');
    containerElement!.appendChild(drawerIframe);
    containerElement!.appendChild(videoIframe);

    const appElement: HTMLElement | null = document.getElementById('app');
    appElement!.appendChild(headerElement);
    appElement!.appendChild(containerElement);
    appElement!.appendChild(subtractImg);

    window.addEventListener('message', (event) => {
        const messageData = event.data;
        if (messageData.action === 'changeRoute') {
            navigateTo(messageData.route);
        }
    });
}
