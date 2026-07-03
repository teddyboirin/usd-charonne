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
  });


  export const isDesktop = (width) => {
    if (width > 768) return true;
    return false
  };

type StrapiPhoto = {
  data?: {
    attributes?: {
      url?: string;
      formats?: {
        large?: { url?: string };
      };
    };
  } | null;
};

const DEFAULT_TEAM_IMAGE =
  'https://images.unsplash.com/photo-1546519638-68fb1504f6cf?q=80&w=2090&auto=format&fit=crop';

export function getTeamPhotoUrl(photo?: StrapiPhoto): string {
  const attrs = photo?.data?.attributes;
  return attrs?.formats?.large?.url || attrs?.url || DEFAULT_TEAM_IMAGE;
}