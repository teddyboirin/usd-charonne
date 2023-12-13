import axios from 'axios';
export const isDesktop = (width) => {
  if (width > 768) return true;
  return false;
};

export const fetcher = async (url) => {
  const res = await axios.get(url).then((e) => e.data.data);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
};
