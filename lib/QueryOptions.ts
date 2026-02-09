import {
  queryOptions as rqQueryOptions,
  type QueryKey,
  type UseQueryOptions,
  type QueryFunctionContext,
} from "@tanstack/react-query";
import { Fetcher } from "./Fetcher";

export type TOptionsParams<TData = unknown> = {
  queryKey: QueryKey;
  auth?: boolean;
  server?: boolean;
  //   not allowed override queryKey and queryFn
  config?: Omit<UseQueryOptions<TData, Error, TData, QueryKey>, "queryKey" | "queryFn">;
};

/**
 *
 * @param this configurable query options wrapper
 * @returns queryoptions
 */
export const configQueryOptions = <TData = unknown>(options: TOptionsParams<TData>) => {
  const {
    queryKey,
    //! default auth in fetcher is true
    auth,
    server = false,
    /**
     * config:  
    gcTime,
    enabled,
    networkMode,
    initialData,
    initialDataUpdatedAt,
    meta,
    notifyOnChangeProps,
    placeholderData,
    queryKeyHashFn,
    refetchInterval,
    refetchIntervalInBackground,
    refetchOnMount,
    refetchOnReconnect,
    refetchOnWindowFocus,
    retry,
    retryOnMount,
    retryDelay,
    select,
    staleTime,
    structuralSharing,
    subscribed,
    throwOnError,
     */
    config,
  } = options;

  return rqQueryOptions<TData>({
    ...config,
    // core querkey
    queryKey,
    // queryFn will be set in the actual query usage
    queryFn: async (context: QueryFunctionContext<QueryKey>): Promise<TData> => {
      /**
       * @isicontext pageParam (infinite query), meta, queryKey, signal, client
       */

      return Fetcher<TData>({ ...context, auth, serverAction: server });
    },
    staleTime: 1000 * 60 * 60, // 1 jam
    retry: false,
    refetchOnMount: true,
    refetchOnReconnect: true,
  });
};
