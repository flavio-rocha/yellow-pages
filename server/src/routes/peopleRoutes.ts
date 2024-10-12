import express from 'express';
import * as peopleController from '../controllers/peopleController';

const router = express.Router();

router.get('/search', peopleController.search);

export default router;
