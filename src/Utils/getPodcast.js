const axios = require('axios');

export const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/podcast_episodes/',
  params: {
    id: '0ofXAdFIQQRsCYj9754UFx',
    offset: '0',
    limit: '50'
  },
  headers: {
    'X-RapidAPI-Key': '0c77976181msh638da70a39e3d7ep1011d5jsnfdf3a9d73071',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}