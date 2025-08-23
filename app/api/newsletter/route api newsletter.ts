import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"
const prisma = new PrismaClient()

const Schema = z.object({ email: z.string().email() })

export async function POST(req: Request){
  const form = await req.formData()
  const email = String(form.get("email") || "")
  const parsed = Schema.safeParse({ email })
  if(!parsed.success) return NextResponse.json({error:"Invalid email"}, {status:400})
  await prisma.newsletter.upsert({
    where: { email },
    update: {},
    create: { email }
  })
  return NextResponse.json({ ok:true })
}
