import { getUserByEmail, User } from "@/lib/getUserByEmail";

import UserClient from "./user-client";
import HydrationProvider, { PrefetchQueries } from "@/components/template/react-query/Hydration";
import { configQueryOptions } from "@/lib/QueryOptions";
export default async function Home() {
  const email = "ilham@gmail.com";
  const email2 = "budi@gmail.com";

  /**
   * ex: penggunaan hydration untuk prefetch data di server
   */
  const queries: PrefetchQueries<User | null>[] = [
    {
      ...configQueryOptions<User | null>({
        queryKey: ["/api/user", { email }],
        auth: false,
      }),
    },
    {
      ...configQueryOptions<User | null>({
        queryKey: ["/api/tester/test", { email: email2 }],
        auth: false,
      }),
    },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* apabila mau coba untuk tidak menggunakan ssr, hilangkan hydrationprovider-nya */}
        <HydrationProvider queries={queries}>
          <UserClient email={email} email2={email2} />
        </HydrationProvider>
      </main>
    </div>
  );
}
