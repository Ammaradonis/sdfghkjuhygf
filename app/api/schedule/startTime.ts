import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(){
  const sessions = await prisma.classSession.findMany({ take: 10, orderBy: { startTime: 'asc' } })
  return NextResponse.json(sessions)
}
