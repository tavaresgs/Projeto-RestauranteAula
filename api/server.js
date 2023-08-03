require('dotenv').config();
const express = require ('express');
const cors = require ('cors');

const PORT = process.env.PORT || 3000;

const app = express();
const rotes = require('./src/routes');
app.use(cors());
app.use(express.json());

app.use(rotes);

app.listen(PORT, () => { console.log("Api respondendo na porta "+ PORT) })