interface IRequest {
  readonly url: string;
  readonly method?: 'GET' | 'POST' | 'PATCH';
  readonly body?: { [key: string]: any };
} 

export const request = (params: IRequest): Promise<Response> => {
  const requestHeaders = new Headers();

  requestHeaders.set('Content-Type', 'application/json');

  const sitingFetch: RequestInit = {
    method: params.method || 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: requestHeaders,
  };

  if (params.body) {
    sitingFetch.body = JSON.stringify(params.body);
  }

  return fetch(params.url, sitingFetch);
};
