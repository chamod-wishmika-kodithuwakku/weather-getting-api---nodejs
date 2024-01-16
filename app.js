const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

const axios = require('axios'); // If you are using Axios

app.get('/weather', async (req, res) => {
    try {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: 'London', // Replace with your desired city
                appid: 'bb6ff31f7915273e804445a77c511790' // Replace with your OpenWeatherMap API key
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});
