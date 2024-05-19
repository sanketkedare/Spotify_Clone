export const fetchPodcastEpisodes = async () => {
  const url =
    "https://spotify-web2.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0c77976181msh638da70a39e3d7ep1011d5jsnfdf3a9d73071",
      "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
