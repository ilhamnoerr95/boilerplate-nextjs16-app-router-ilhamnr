import { Fetcher } from "@/lib/Fetcher";
import type { MutationKey } from "@tanstack/react-query";
import type { HttpMethod } from "@/types/Fetcher.type";

type NonGetMethod = Exclude<HttpMethod, "GET">;

type UseHooksMutationPayload = {
  mutationKey: MutationKey;
  method: NonGetMethod;
};

export type UseHooksMutationResult<TData, TVariables> = {
  mutationKey: MutationKey;
  mutationFn: (params: TVariables) => Promise<TData>;
};

export const useHooksMutation = <
  TData = unknown, // tData is response data type
  TVariables extends Record<string, any> = Record<string, any>, // tVariables is request body type/Dto
>(
  payload: UseHooksMutationPayload
): UseHooksMutationResult<TData, TVariables> => {
  /**
   * MutationKey example: ["/api/user", {id: userId}] like query params
   * as token unique identifier for mutation
   */
  const { mutationKey, method } = payload;

  return {
    mutationKey,
    mutationFn: async (params: TVariables): Promise<TData> => {
      /**
       * ex mutation: tes.mutate({name, age}) => it'll be passed to params
       */

      return Fetcher<TData, TVariables>({ queryKey: mutationKey, method, body: params });
    },
  };
};
