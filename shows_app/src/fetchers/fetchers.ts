export const fetcher = async <T>(
  url: string,
  method: string = "GET",
  body?: any
): Promise<T> => {
  const headers: HeadersInit = {
    "access-token": localStorage.getItem("authToken") || "",
    client: localStorage.getItem("client") || "",
    uid: localStorage.getItem("uid") || "",
    "token-type": "Bearer",
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Fetch error: ${error}`);
    throw error;
  }
};
