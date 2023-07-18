import express from 'express';
 import bodyParser from 'body-parser';
 

import todolist from './routes/todos'
const app = express();


app.use(todolist);
app.use(bodyParser.json());
app.listen(3000);