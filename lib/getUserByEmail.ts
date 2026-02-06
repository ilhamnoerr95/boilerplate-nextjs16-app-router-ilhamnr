import { QueryFunctionContext } from "@tanstack/react-query";

export type User = {
  id: number;
  name: string;
  email: string;
};

export async function getUserByEmail({ queryKey }: QueryFunctionContext): Promise<User | null> {
  const [, email] = queryKey as [string, string];
  console.log(queryKey);
  const res = await fetch(`http://localhost:3000/api/user?email=${email}`, {
    cache: "no-store", // penting untuk SSR
  });

  const json = await res.json();

  return json.data;
}
