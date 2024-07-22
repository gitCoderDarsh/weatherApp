import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;

function helloworld(req, res){
  res.send("hello world.");
}

async function data(req, res){
  const city = req.query.city || 'London';
  try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    res.json(response.data);
  } catch(error){
    res.status(500).send('error fetching weather data');
    console.log(error)
  } 
}

app.get('/weather', data);
app.get('/', helloworld);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});