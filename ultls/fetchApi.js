const axios = require("axios");

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "26e6d09166mshc1bc7292038e807p190051jsnc55e158b074d",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
    return data;
  } catch (e) {
    console.log(e, "Error the API");
  }
};

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/auto-complete',
//   params: {query: 'abu dhabi', hitsPerPage: '25', page: '0', lang: 'en'},
//   headers: {
//     'X-RapidAPI-Key': '26e6d09166mshc1bc7292038e807p190051jsnc55e158b074d',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
