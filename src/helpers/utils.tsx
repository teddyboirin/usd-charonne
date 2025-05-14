type FetcherOptions = {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  headers: HeadersInit;
  body?: string;
};

export const fetcher = (url: string, options?) => fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}${url}`, options)
  .then((res) => {
    if (res.ok && res.status !== 204) return res.json();
    if (res.ok && res.status === 204) return null;
    throw new Error('Something went wrong.');
  })
  .catch((err) => {
    console.log(err);
  }).finally(() => {
    console.log(`${process.env.BACKEND_API}${url}`);
    
  });


  export const isDesktop = (width) => {
    if (width > 768) return true;
    return false
  };