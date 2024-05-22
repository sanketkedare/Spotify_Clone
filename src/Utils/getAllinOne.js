import axios from "axios";

export const getAllInOne = async (query) => {
  const options = {
    method: "GET",
    url: "https://spotify-web2.p.rapidapi.com/search/",
    params: {
      q: query,
      type: "multi",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": "0c77976181msh638da70a39e3d7ep1011d5jsnfdf3a9d73071",
      "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};
