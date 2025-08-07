const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Express ');
});

app.get('/new', (req, res) => {
  res.send('Here is the new code');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
