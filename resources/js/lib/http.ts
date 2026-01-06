type JsonRecord = Record<string, unknown>;

export const getCsrfToken = () =>
  document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.getAttribute("content");

export const postJson = (url: string, payload?: JsonRecord) => {
  const csrfToken = getCsrfToken();

  return fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(csrfToken ? { "X-CSRF-TOKEN": csrfToken } : {}),
    },
    ...(payload ? { body: JSON.stringify(payload) } : {}),
  });
};
