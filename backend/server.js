// ENTRY POINT TO THE SERVER

// BRINGS IN EXPRESS & DOTENV
const { application } = require('express');
const express = require('express');
const dotenv = require('dotenv').config();

// ERROR HANDLER
const {errorHandler} = require('./middleware/errorMiddleware');

// PORT
const port = process.env.PORT || 5002;

// INITIALIZES EXPRESS
const app = express();

// ADD MIDDLE WARE
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use('/api/goals', require('./routes/goalRoutes'));

// OVERWRITES THE DEFAULT ERROR HANDLER
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));