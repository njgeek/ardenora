import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Demo buyers — replace with a real database in production
const DEMO_BUYERS = [
  { email: "buyer@demo.com", password: "ardenora2026", name: "Demo Buyer", company: "Demo Retail Co" },
];

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    const buyer = DEMO_BUYERS.find(
      (b) => b.email.toLowerCase() === email.toLowerCase() && b.password === password
    );

    if (!buyer) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Set a session cookie (simple token — replace with JWT/session store in production)
    const token = Buffer.from(JSON.stringify({ email: buyer.email, name: buyer.name, company: buyer.company })).toString("base64");

    const cookieStore = await cookies();
    cookieStore.set("buyer_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json({ success: true, name: buyer.name });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
