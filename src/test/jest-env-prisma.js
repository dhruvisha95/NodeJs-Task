const { PrismaClient } = require('@prisma/client');
const { execSync } = require('child_process');

const prisma = new PrismaClient();

module.exports = async () => {
  // Set test database URL
  process.env.DATABASE_URL = "postgresql://postgres:postgres@127.0.0.1:5432/test_db";

  // Reset and migrate the database
  await prisma.$executeRawUnsafe('DROP SCHEMA public CASCADE; CREATE SCHEMA public;');
  execSync('npx prisma migrate dev --name init-test', { stdio: 'inherit' });

  // Connect Prisma client
  await prisma.$connect();

  // Optionally, store any global state if needed
  global.__PRISMA__ = prisma;
};

module.exports = async () => {
    // Disconnect Prisma client
    if (global.__PRISMA__) {
      await global.__PRISMA__.$disconnect();
    }
};