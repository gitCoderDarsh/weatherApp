// importing libraries

import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;

// middlewares
//this helps to display the static page, basically the frontend where client will interact with the website
app.use(express.static('../client/public'));
app.use(express.json());

async function data(req, res){
  console.log(req.body);
  const city = req.body.city;
  try{
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    res.json(response.data);
  } catch(error){
    res.status(500).send('error fetching weather data');
    console.log(error);
  } 
}

app.post('/weather', data);
app.get('/');

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});