
import express from 'express';
import knex from 'knex';
import development from './knexfile.js';
import { staticData } from './routers/staticData.js';
import cors from 'cors'

const app = express()

export const db = knex(development['development']);

app.use(cors())
app.use(express.json());
app.use('/staticData', staticData);

app.get('/', async (req, res) => {

    const results = await db.select('*').from('bonds').limit(10);
    res.status(200).send(results)
})

app.listen(3001, () => {
    console.log("server started in port 3001")
})



