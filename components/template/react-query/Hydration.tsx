import { HydrationBoundary, QueryClient, queryOptions, dehydrate } from "@tanstack/react-query";

export type PrefetchQueries<TData = unknown> = ReturnType<typeof queryOptions<TData>>;

export type HydrationProps<TData> = {
  queries: PrefetchQueries<TData>[];
  children: React.ReactNode;
};

const HydrationProvider = async <TData,>(props: HydrationProps<TData>) => {
  const { queries, children } = props;

  const queryClient = new QueryClient();

  // Prefetch di SERVER
  await Promise.all(queries.map((q) => queryClient.prefetchQuery(q)));

  const dehydratedState = dehydrate(queryClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};

export default HydrationProvider;
