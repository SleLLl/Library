import { isEmpty } from 'lodash';
import queryString from 'query-string';

interface BaseRequest {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit | null | Record<string, unknown>;
}
const objectToQueryString = (queryObject: Record<string, unknown>): string =>
  queryString.stringify(queryObject, {
    arrayFormat: 'bracket',
    skipEmptyString: true,
    skipNull: true,
  });

const baseRequest = (url: string, reqInit?: BaseRequest) =>
  fetch(url, {
    ...reqInit,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      ...reqInit?.headers,
    },
    body: JSON.stringify(reqInit?.body),
  })
    .then((response) => response.json())
    .then((json) => (json ? json : Promise.reject(new Error(json.message))));

export const getRequest = <T>(
  url: string,
  query?: Record<string, unknown>,
  headers?: Record<string, string>,
): Promise<T> => {
  const reqUrl = isEmpty(query) || !query ? url : `${url}?${objectToQueryString(query)}`;
  return baseRequest(reqUrl, { headers });
};
