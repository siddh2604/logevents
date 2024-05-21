const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors")
PORT = process.env.PORT || 3001;
const { logger } = require('./logEvents');

// app.use(express.static("/views"));
app.use(express.static(path.join(__dirname)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cors());

app.use(logger);

app.get("/index(.html)?", (req, res) => {

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));