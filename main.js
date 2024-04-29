const express = require('express');
const app = express();
const client = require('prom-client');
const routes = require('./routes/gatewayroutes');
require('dotenv').config();


app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send("Hello"); 
  });
  
app.use('/api/gateway', routes );

const collectDefaultMetrics = client.collectDefaultMetrics;

collectDefaultMetrics({register : client.register});

app.get('/metrics', async (req, res) => {
    res.setHeader("Content-Type", client.register.contentType) ;
    const metrics = await client.register.metrics();
    res.send(metrics);
  });

const port = process.env.PORT;

app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
 