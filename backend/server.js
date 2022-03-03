// ENTRY POINT TO THE SERVER

// BRINGS IN EXPRESS & DOTENV
const express = require('express');
const dotenv = require('dotenv').config();

// PORT
const port = process.env.PORT || 5002;

// INITIALIZES EXPRESS
const app = express();

app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`Server started on port ${port}`));