const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const payload = req.body;
    console.log(payload);
    res.json(payload);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));