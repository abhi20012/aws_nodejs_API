import express from 'express';
import router from './routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

app.use('/', router);

dbConnection();

app.listen(port, () => console.log(`Server is running on port: ${port}`));
