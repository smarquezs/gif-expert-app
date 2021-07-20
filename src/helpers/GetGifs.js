export const getGifts = async (category) => {
  const baseUrl = "https://api.giphy.com/v1/gifs/search";
  const apiKey = "hqr3aNgMI8MYKHna674D8MuB0qR2NM3b";
  const limit = 10;
  const encodedCategory = encodeURI(category);

  const url = `${baseUrl}?api_key=${apiKey}&q=${encodedCategory}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
