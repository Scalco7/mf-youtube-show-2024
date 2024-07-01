export function navigateTo(route: string): void {
  const messageData = {
    action: 'changeRoute',
    route: route,
  };
  window.parent.postMessage(messageData, '*');
}

export function getRoute(): string {
  return window.location.pathname;
}
