import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const offerings = await prisma.offerings.findMany();
  console.log(offerings);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
