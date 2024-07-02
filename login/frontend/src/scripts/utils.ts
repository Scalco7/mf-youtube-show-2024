export function onLogin(token: string): void {
    const messageData = {
        action: 'logged',
        token: token,
    };
    window.parent.postMessage(messageData, '*');
}