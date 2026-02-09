"use client";

import { User } from "@/lib/getUserByEmail";
import { useHookQuery } from "@/hook/useHookQuery";

export default function UserClient({ email, email2 }: { email: string; email2: string }) {
  /**
   * key harus sama dengan yg ada di server
   * untuk manggil cache yg sudah difetch dari server
   */

  const { data, isLoading } = useHookQuery<{ success: boolean; data: User }>({
    queryKey: ["/api/user", { email }],
    auth: false,
  });

  const { data: testData } = useHookQuery<{ success: boolean; data: User }>({
    queryKey: ["/api/tester/test", { email: email2 }],
    auth: false,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Nama: {data?.data.name}</p>
      <p>Email: {data?.data.email}</p>
    </div>
  );
}
