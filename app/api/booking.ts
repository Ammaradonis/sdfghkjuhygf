import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // find the session first
    const session = await prisma.classSession.findUnique({
      where: { id: data.sessionId },
      include: { bookings: true }
    });

    if (!session) {
      return NextResponse.json({ ok: false, message: "Session not found." }, { status: 404 });
    }

    // create a booking
    await prisma.booking.create({
      data: {
        sessionId: session.id,
        name: data.name,
        email: data.email,
      },
    });

    // count bookings dynamically
    const bookingCount = await prisma.booking.count({
      where: { sessionId: session.id },
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
