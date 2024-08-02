export const fetchApi = async (url) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "470f560720msh34aac1c176dec2ap161364jsn880a6d9b2016",
      "x-rapidapi-host": "low-carb-recipes.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
