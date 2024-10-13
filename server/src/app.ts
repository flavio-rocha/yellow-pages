import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,POST,PUT,DELETE',
  credentials: false,
  optionsSuccessStatus: 204,
};

// middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// routes
app.use(routes.peopleRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
