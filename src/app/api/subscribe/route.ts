import { appendSubscriberEmail } from "@/lib/googleSheets";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch (error) {
    console.error("Failed to parse subscribe payload", error);
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof payload !== "object" || payload === null) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = String((payload as { email?: string }).email ?? "").trim().toLowerCase();
  if (!email || !emailRegex.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  try {
    await appendSubscriberEmail(email);
  } catch (error) {
    console.error("Failed to store subscriber in Google Sheets", error);
    return Response.json({ error: "Unable to save subscription right now." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
