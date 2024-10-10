import express from 'express';
import * as peopleController from '../domains/people/controllers/peopleControllers';

const router = express.Router();

router.get('/search', peopleController.search);

export default router;
