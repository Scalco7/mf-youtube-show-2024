export function navigateTo(route: string): void {
  const messageData = {
    action: 'changeRoute',
    route: route,
  };
  window.parent.postMessage(messageData, '*');
}

export function getParams(): URLSearchParams {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}

export function getRoute(): string {
  return window.location.pathname;
}
