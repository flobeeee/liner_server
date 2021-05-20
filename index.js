const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 4000;
const createRouter = require('./routes/create');
const updateRouter = require('./routes/update');
const readRouter = require('./routes/read');
const deleteRouter = require('./routes/delete');

app.use(cors({
  origin: 'http://localhost',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

app.use(express.json());

app.use(morgan('tiny'));

app.use('/create', createRouter);
app.use('/update', updateRouter);
app.use('/read', readRouter);
app.use('/delete', deleteRouter);


app.get('/', (req, res) => {
  res.send('Hello Liner!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});