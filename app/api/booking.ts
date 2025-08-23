import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const s = await prisma.classSession.findUnique({
      where: { id: data.sessionId },
      include: { bookings: true },
    });

    if (!s) {
      return NextResponse.json({ ok: false, message: "Session not found." }, { status: 404 });
    }

    await prisma.booking.create({
      data: {
        sessionId: s.id,
        name: data.name,
        email: data.email,
      },
    });

    // compute the live booking count instead of updating "booked"
    const bookingCount = await prisma.booking.count({
      where: { sessionId: s.id },
    });

    return NextResponse.json({
      ok: true,
      message: "Booked! See you in the gym.",
      totalBookings: bookingCount,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, message: "Booking failed." }, { status: 500 });
  }
}
