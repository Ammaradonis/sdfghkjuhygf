import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const sessions = await prisma.classSession.findMany({
    take: 10,
    orderBy: { date: "asc" }, // ✅ use "date" instead of "startTime"
  })
  return NextResponse.json(sessions)
}
