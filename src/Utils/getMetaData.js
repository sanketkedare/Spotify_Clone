import axios from 'axios';

export const getMetaData = async() =>{

const options = {
  method: 'GET',
  url: 'https://spotify-web2.p.rapidapi.com/album_metadata/',
  params: {
    id: '3IBcauSj5M2A6lTeffJzdv'
  },
  headers: {
    'X-RapidAPI-Key': '0c77976181msh638da70a39e3d7ep1011d5jsnfdf3a9d73071',
    'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}