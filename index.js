express = require('express');
app = express();
const dotenv = require('dotenv');
dotenv.config('./.env');
port = 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Example: Create a new user
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example: Fetch all users
app.get('/get', async (req, res) => {
  const users = await prisma.users.findMany();
  res.json(users);
});

app.listen(port, () => {    
  console.log(`Server is running on http://localhost:${port}`);
})
