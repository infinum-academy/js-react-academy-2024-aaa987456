import { IReview } from "@/app/typings/reviews";

export async function fetcher<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T> {
  const auth = {
    client: localStorage.getItem("client") || "",
    accessToken: localStorage.getItem("authToken") || "",
    uid: localStorage.getItem("uid") || ""
  };

  try {
    const response = await fetch(input, {
      headers: {
        client: auth.client,
        "access-token": auth.accessToken,
        uid: auth.uid,
        ...init?.headers
      },
      ...init
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Fetch error: ${error}`);
  }
}
