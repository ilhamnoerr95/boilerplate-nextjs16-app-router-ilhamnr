"use client";

import { useQuery } from "@tanstack/react-query";
import { getUserByEmail } from "@/lib/getUserByEmail";

export default function UserClient({ email }: { email: string }) {
  /**
   * key harus sama dengan yg ada di server
   * untuk manggil cache yg sudah difetch dari server
   */
  const { data, isLoading } = useQuery({
    queryKey: ["user", email],
    queryFn: getUserByEmail,
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
      <p>Nama: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}
