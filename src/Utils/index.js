const API = {
  APP_ID: "ebab40a8",
  APP_KEY: "2691442fef45b132b7f00cc8efb70425",
  ROOT_URL: "https://api.edamam.com/api/recipes/v2?type=public"
};

export const API_URL = {
  search: (query) => `${API.ROOT_URL}&q=${query}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`
}


export default API;
