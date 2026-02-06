import { HydrationBoundary, QueryClient, QueryFunction, dehydrate } from "@tanstack/react-query";

export type PrefetchQueries<T = unknown> = {
  queryKey: any[];
  queryFn: QueryFunction<T>;
};

export type HydrationProps = {
  queries: PrefetchQueries[];
  children: React.ReactNode;
};

const HydrationProvider = async (props: HydrationProps) => {
  const { queries, children } = props;

  const queryClient = new QueryClient();

  // Prefetch di SERVER
  await Promise.all(
    queries.map((q) =>
      queryClient.prefetchQuery({
        queryKey: q.queryKey,
        queryFn: q.queryFn,
      })
    )
  );

  const dehydratedState = dehydrate(queryClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
};

export default HydrationProvider;
