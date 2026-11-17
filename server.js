import 'dotenv/config'
import e from 'express'
import { connectDB } from './db/connection.js';
import route from './routes/shelfRoutes.js';

const app = e();
const port = 3000;

connectDB();

app.use(e.json());

app.use('/api', route);

app.listen(port, () => {
  console.log('Server is on localhost:', port);
})