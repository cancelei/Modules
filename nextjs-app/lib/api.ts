import axios from 'axios';

export async function fetchDataFromAPI(apiUrl: string) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from API: ${error}`);
    return null;
  }
}

export async function postDataToAPI(apiUrl: string, data: any) {
  try {
    const response = await axios.post(apiUrl, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting data to API: ${error}`);
    return null;
  }
}