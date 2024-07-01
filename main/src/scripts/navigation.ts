export function navigateTo(route: string): void {
  window.location.href = route;
}

export function getRoute(): string {
  return window.location.pathname;
}
