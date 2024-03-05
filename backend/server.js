const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the Virtual Time Capsule backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
