const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './.env'});


app = express();

const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

port = process.env.PORT || 3000;

app.use(express.json());
app.get('/test',async (req,res)=>{
  res.send('pass!') ;
})
app.use('/auth', authRoutes);
app.use('/user', userRoutes); 


app.listen(port, () => {    
  console.log(`Server is running on http://localhost:${port}`);
})

module.exports = app;