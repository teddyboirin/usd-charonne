type FetcherOptions = {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers: HeadersInit;
  body?: string;
};

export const fetcher = (url: string, options?) => fetch(url, options)
  .then((res) => {
    if (res.ok && res.status !== 204) return res.json();
    if (res.ok && res.status === 204) return null;
    throw new Error('Something went wrong.');
  })
  .catch((err) => {
    console.log(err);
  });

