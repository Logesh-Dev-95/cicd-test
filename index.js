const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from new updated dev');
});

app.get('/new', (req, res) => {
  res.send('Here is the new code');
});

app.get('/dev', (req, res) => {
  res.send('Here is dev code');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
