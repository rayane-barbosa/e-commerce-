export const fetchImages = async (): Promise<any[]> => {
  const apiUrl =
    "https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc";
  const apiKey = "DEMO_API_KEY";

  try {
    const response = await fetch(apiUrl, {
      headers: {
        "x-api-key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
