import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter
const submissions = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = submissions.get(ip);
  if (!entry || now > entry.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + 3600000 }); // 1 hour
    return false;
  }
  if (entry.count >= 3) return true;
  entry.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    // Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 100 || email.length > 100 || message.length > 5000) {
      return NextResponse.json(
        { error: "Input exceeds maximum length." },
        { status: 400 }
      );
    }

    // TODO: Integrate email service (Resend, SendGrid, etc.) before production
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@townmedialabs.ca',
    //   to: 'info@townmedialabs.ca',
    //   subject: `New Lead: ${name} - ${service}`,
    //   html: `<p><strong>Name:</strong> ${name}</p>
    //          <p><strong>Email:</strong> ${email}</p>
    //          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //          <p><strong>Service:</strong> ${service}</p>
    //          <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
    //          <p><strong>Message:</strong> ${message}</p>`
    // });

    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", { name, email, service });
    }

    return NextResponse.json(
      { success: true, message: "Thank you! We'll get back to you within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
