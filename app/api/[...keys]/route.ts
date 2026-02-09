import { NextRequest, NextResponse } from "next/server";
import { HEADERS } from "@/utils/header";
import { cookies } from "next/headers";

export async function GET(req: NextRequest, { params }: { params: Promise<{ keys?: string[] }> }) {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    const auth = req.headers.get("auth");

    const { keys } = (await params) ?? [];
    const pathParams = "/" + keys?.join("/");
    const query = req.nextUrl.searchParams.toString();
    const pathWQuery = query ? `${pathParams}?${query}` : pathParams;

    const url = `${process.env.NEXT_PUBLIC_API_LINK_BE}${pathWQuery}`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...HEADERS,
        ...(auth === "true" && { Authorization: token as string }),
      },
    };

    const apiRes = await fetch(url, options);

    const result = await apiRes.json();

    if (!apiRes.ok) {
      console.log("not oke?");
      return NextResponse.json(
        { error: result?.error?.message },
        { status: result?.error?.status }
      );
    }
    const response = NextResponse.json(result);
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ keys?: string[] }> }
) {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    const auth = req.headers.get("auth");

    const { keys } = (await params) ?? [];
    const pathParams = "/" + keys?.join("/");
    const query = req.nextUrl.searchParams.toString();
    const pathWQuery = query ? `${pathParams}?${query}` : pathParams;

    const url = `${process.env.NEXT_PUBLIC_API_LINK_BE}${pathWQuery}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...HEADERS,
        ...(auth === "true" && { Authorization: token as string }),
      },
    };

    const apiRes = await fetch(url, options);

    const result = await apiRes.json();
    if (!apiRes.ok) {
      console.log("not oke?");
      return NextResponse.json(
        { error: result?.error?.message },
        { status: result?.error?.status }
      );
    }
    const response = NextResponse.json(result);
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ keys?: string[] }> }) {
  try {
    const body = await req.json();
    const data = { ...body };

    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    const auth = req.headers.get("auth");

    const { keys } = (await params) ?? [];
    const pathParams = "/" + keys?.join("/");
    const query = req.nextUrl.searchParams.toString();
    const pathWQuery = query ? `${pathParams}?${query}` : pathParams;

    const url = `${process.env.NEXT_PUBLIC_API_LINK_BE}${pathWQuery}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...HEADERS,
        ...(auth === "true" && { Authorization: token as string }),
      },
      body: JSON.stringify(data),
    };

    const apiRes = await fetch(url, options);

    const result = await apiRes.json();

    if (!apiRes.ok) {
      console.log("not oke?", result?.error?.data);
      return NextResponse.json(
        {
          error: result?.error?.message || result?.error?.data,
          status: result?.error?.status,
        },
        { status: result?.error?.status }
      );
    }
    const response = NextResponse.json(result, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ keys?: string[] }> }) {
  try {
    const body = await req.json();
    const data = { ...body };

    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    const auth = req.headers.get("auth");

    const { keys } = (await params) ?? [];
    const pathParams = "/" + keys?.join("/");
    const query = req.nextUrl.searchParams.toString();
    const pathWQuery = query ? `${pathParams}?${query}` : pathParams;

    const url = `${process.env.NEXT_PUBLIC_API_LINK_BE}${pathWQuery}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...HEADERS,
        ...(auth === "true" && { Authorization: token as string }),
      },
      body: JSON.stringify(data),
    };

    const apiRes = await fetch(url, options);

    const result = await apiRes.json();

    if (!apiRes.ok) {
      console.log("not oke?", result?.error?.data);
      return NextResponse.json(
        {
          error: result?.error?.message || result?.error?.data,
          status: result?.error?.status,
        },
        { status: result?.error?.status }
      );
    }
    const response = NextResponse.json(result, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
