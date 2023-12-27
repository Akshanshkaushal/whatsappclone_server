import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
 
// Enable CORS before defining routes
app.use(cors({origin:['http://localhost:3000', 'https://whatsapp-clone-forntend-b.vercel.app']}));

// Express now has built-in middleware for handling JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', Routes);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
