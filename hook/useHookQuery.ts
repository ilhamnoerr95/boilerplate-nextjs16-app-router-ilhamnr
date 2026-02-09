"use client";

import { useQuery } from "@tanstack/react-query";
import { configQueryOptions, TOptionsParams } from "@/lib/QueryOptions";

export const useHookQuery = <TData>(params: TOptionsParams<TData>) => {
  return useQuery(
    configQueryOptions<TData>({
      queryKey: params.queryKey,
      auth: params.auth,
      config: {
        ...params.config,
      },
    })
  );
};
