export function getRoute(): string {
  return window.location.pathname;
}

export function getParams(): URLSearchParams {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams;
}
