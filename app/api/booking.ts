import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"
const prisma = new PrismaClient()

const BookingSchema = z.object({
  sessionId: z.coerce.number(),
  name: z.string().min(2),
  email: z.string().email(),
})

export async function POST(req: Request){
  const form = await req.formData()
  const data = BookingSchema.safeParse({
    sessionId: form.get("sessionId"),
    name: form.get("name"),
    email: form.get("email"),
  })
  if(!data.success) return NextResponse.json({error:"Invalid input"}, {status:400})

  const s = await prisma.classSession.findUnique({ where: { id: data.data.sessionId } })
  if(!s) return NextResponse.json({error:"Session not found"}, {status:404})

  await prisma.booking.create({
    data: { sessionId: s.id, name: data.data.name, email: data.data.email }
  })
  return NextResponse.json({ok:true, message:"Booked! See you in the gym."})
}
