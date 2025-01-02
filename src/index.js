const express = require('express');
const dotenv = require('dotenv');

app = express();

const userRoutes = require('./routes/authRoutes')
const authRoutes = require('./routes/authRoutes')

dotenv.config({path: './.env'});
port = process.env.PORT || 3000;

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);


app.listen(port, () => {    
  console.log(`Server is running on http://localhost:${port}`);
})
