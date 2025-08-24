import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // --- Create a Trainer ---
  const jamal = await prisma.trainer.create({
    data: {
      name: "Jamal Chen",
      nickname: "The Technician",
      bio: "NASM Certified. Transformed 200+ SF tech workers from keyboard warriors to ring warriors.",
      photoUrl: "/images/trainers/jamal.jpg",
      specialties: "Form, Conditioning, Beginner", // ✅ string instead of array
    },
  })

  // --- Create a Class Type ---
  const beginner = await prisma.classType.create({
    data: {
      name: "Beginner (Fog Cutter)",
      imageUrl: "/images/classes/beginner.jpg",
    },
  })

  // --- Generate 7 sessions starting today at 6pm ---
  const now = new Date()
  const addDays = (d: number) => new Date(now.getTime() + d * 86400_000)

  for (let i = 0; i < 7; i++) {
    await prisma.classSession.create({
      data: {
        classTypeId: beginner.id,
        startsAt: new Date(addDays(i).setHours(18, 0, 0, 0)),
        durationMin: 60,
        coachId: jamal.id,
        capacity: 24,
        location: "Main Gym",
      },
    })
  }

  // --- Add Testimonials ---
  await prisma.testimonial.createMany({
    data: [
      {
        name: "Sarah K.",
        location: "SoMa",
        quote:
          "Shredded my pandemic ‘Dolores Park bod’ in 8 weeks! More energizing than Philz coffee.",
        photoUrl: "/images/testimonials/sarah.jpg",
        alt: "Sarah, a tech worker from SoMa, smiling after a workout in front of a colorful Clarion Alley mural in the Mission District.",
      },
      {
        name: "Diego R.",
        location: "Sunset",
        quote: "Went from shy to school champ. Coaches here are like family.",
        photoUrl: "/images/testimonials/diego.jpg",
        alt: "Diego, a high school student from the Sunset, holding boxing gloves at Ocean Beach with sunset.",
      },
    ],
  })
}

// --- Run Seeder Safely ---
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error("❌ Seeding error:", e)
    await prisma.$disconnect()
    process.exit(1)
  })
