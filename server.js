const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Project");
});

const categoryRoutes = require('./routes/routes')

app.use('/api/', categoryRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});