const express = require('express');
const app = express();

app.get('/:number', (req, res) => {
  const num = req.params.number;
  const result = num * 2;
  res.send(`Result: ${result}`);
});

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');});