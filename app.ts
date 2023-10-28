import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const express = require('express');
const path = require('path');

export const app = express();
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Set the view engine to EJS
app.set('view engine', 'ejs');
// Define a route for the home page
app.get('/', (req, res) => {
    res.render('index');
});


export default app;