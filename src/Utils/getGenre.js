export const getGenre = async (id) => {
  const url = `https://spotify23.p.rapidapi.com/genre_view/?id=${id}&content_limit=10&limit=20`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0c77976181msh638da70a39e3d7ep1011d5jsnfdf3a9d73071",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
