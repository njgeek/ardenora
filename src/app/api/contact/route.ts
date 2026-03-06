import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, businessType, volume, message } = body;

    if (!name || !company || !email || !businessType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Send email notification (e.g., via Resend, SendGrid, etc.)
    // For now, log to console — replace with actual email sending
    console.log("New buyer application:", {
      name,
      company,
      email,
      phone,
      businessType,
      volume,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
