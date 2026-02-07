import { QueryKey } from "@tanstack/react-query";
import Cookies from "js-cookie";
/**
 * Fetcher module to handle HTTP requests.
 * queryKey[0] for path
 * queryKey[1] for query params
 */

type TFetcherParams<TData = unknown> = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: TData;
  queryKey: QueryKey;
  headers?: HeadersInit;
  url?: string | undefined | null;
  auth?: boolean;
  serverAction?: boolean; // for server action
};

/**
 * Custom fetcher function to make HTTP requests.
 * @returns
 */
export const Fetcher = async <TData>(params: TFetcherParams<TData>) => {
  try {
    const {
      method = "GET",
      body,
      queryKey,
      headers = {
        "Content-Type": "application/json",
      },
      url,
      auth = true,
      serverAction = false,
    } = params;

    const token = Cookies.get("token"); // cookies name

    const query = new URLSearchParams(queryKey?.[1] as string);
    const path = url || `${queryKey[0]}?${query.toString()}`;
    const serverActPath = serverAction
      ? (process.env.API_URL_INTERNAL as string)
      : (process.env.NEXT_PUBLIC_ORIGIN as string);

    // url string
    const urlString = serverActPath + path;

    const opts = {
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
        ...headers,
        ...(auth && { Authorization: token }),
      },
    };

    const res = await fetch(urlString, opts);

    const result = await res.json();

    if (!res.ok) {
      console.error("not ok", result);
      return result;
    }

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};
