import { MutatorArgs } from "@/app/typings/auths";

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
