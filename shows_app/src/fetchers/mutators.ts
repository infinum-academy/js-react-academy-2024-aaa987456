import { MutatorArgs } from "@/app/typings/auths";
import { IReview, IReviewContent } from "@/app/typings/reviews";
import { fetcher } from "./fetchers";
import { swrKeys } from "./swrKeys";

export async function mutator<T>(
  url: string,
  {
    arg
  }: {
    arg: MutatorArgs;
  }
): Promise<T> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(arg)
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  const client = response.headers.get("client");
  const accessToken = response.headers.get("access-token");
  const uid = response.headers.get("uid");

  if (accessToken) {
    localStorage.setItem("client", client || "");
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("uid", uid || "");
    console.log("Token saved:", accessToken);
  } else {
    throw new Error("No access token received.");
  }

  return response.json();
}

export async function createReviewM(url: string, { arg }: { arg: IReview }) {
  try {
    const response = await fetcher(url, "POST", arg);
    return response;
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
}

export async function deleteReviewM(
  url: string,
  { arg }: { arg: { reviewId: string; userId: string } }
) {
  try {
    const response = await fetcher(url, "DELETE");
    return response;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
}
