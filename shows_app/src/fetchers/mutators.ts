import { MutatorArgs } from "@/app/typings/auths";

export async function mutator<T>(
  url: string,
  { arg }: { arg: MutatorArgs }
): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },

    body: JSON.stringify(arg)
  });

  if (!response.ok) {
    throw new Error("Failed");
  }

  return response.json();
}
