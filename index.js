const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 4000;
const createRouter = require('./routes/create');
const updateRouter = require('./routes/update');
const readRouter = require('./routes/read');

app.use(cors({
  origin: 'localhost',
  Methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));

app.use(express.json());

app.use(morgan('tiny'));

app.use('/create', createRouter);
app.use('/update', updateRouter);
app.use('/read', readRouter);


app.get('/', (req, res) => {
  res.send('Hello Liner!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});