import bodyParser from "body-parser";
import cors from 'cors';
import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv'
import racksRoutes from './routes/racks.js'

const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);
app.use('/racks', racksRoutes)
dotenv.config()

mongoose.connect("mongodb://mongo-db/", { useNewUrlParser: true })
    .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
    .catch((error) => console.log(error))