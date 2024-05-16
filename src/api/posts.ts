const BASE_URL = 'https://dummyjson.com';

export const getPosts = async (page = 1, limit = 10) => {
  const url = `${BASE_URL}/posts?limit=${limit}&skip=${(page * limit) - limit}`;

  try {
    // Fetch the data from the URL
    const response = await fetch(url);

    // If the response is not ok (status code is not in the range 200-299),
    // throw an error
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response data as JSON
    const data = await response.json();

    // Return the parsed data
    return data;
  } catch (error) {
    // If there's an error, log it to the console and re-throw it
    console.error('Error fetching data:', error);
    throw error;
  }
};