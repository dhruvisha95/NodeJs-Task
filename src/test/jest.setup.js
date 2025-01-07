const { PrismaClient } = require('@prisma/client');
global.prisma = new PrismaClient();
const { execSync } = require('child_process');


beforeAll(async () => {
    execSync('npx prisma migrate dev', {stdio:'inherit'}); // Run migrations
    await prisma.$connect();
  });
  
  afterAll(async () => {
    await prisma.$disconnect();
  });

  beforeEach(async () => {
    execSync('npx prisma migrate reset --force', {stdio:'inherit'}); // Run migrations
  });
