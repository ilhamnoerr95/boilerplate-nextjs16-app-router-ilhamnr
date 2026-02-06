import { NextResponse } from "next/server";

const dummyUsers = [
  {
    id: 1,
    name: "Ilham",
    email: "ilham@gmail.com",
  },
  {
    id: 2,
    name: "Budi",
    email: "budi@gmail.com",
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  // simulasi delay API
  await new Promise((r) => setTimeout(r, 800));

  const user = dummyUsers.find((u) => u.email === email);

  return NextResponse.json({
    success: true,
    data: user ?? null,
  });
}
