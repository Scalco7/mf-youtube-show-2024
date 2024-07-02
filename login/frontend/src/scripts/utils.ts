export function onLogin(token: string): void {
    const messageData = {
        action: 'onAuth',
        token: token,
    };
    window.parent.postMessage(messageData, '*');
}