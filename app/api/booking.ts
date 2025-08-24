import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const session = await prisma.classSession.findUnique({
      where: { id: data.sessionId },
    })

    if (!session) {
      return NextResponse.json(
        { ok: false, message: "Session not found." },
        { status: 404 }
      )
    }

    const booking = await prisma.booking.create({
      data: {
        sessionId: s.id,
        name: data.name,
        email: data.email,
      },
    });

    return NextResponse.json({
      ok: true,
      message: "Booked! See you in the gym.",
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, message: "Booking failed." }, { status: 500 });
  }
}
