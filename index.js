const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 4000;

app.use(cors({
  origin: 'localhost',
  Methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));

app.use(express.json());

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello Liner!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});