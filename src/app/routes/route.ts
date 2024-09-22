// const express = require("express");
import express, { Request, Response } from 'express';
import AuthenticationRouter from './authentication/authentication';

const router = express.Router();
// home Page
router.get('/', (req: Request, res: Response) => {
  res.send('sdi project running');
});

// Authentication routes
router.use('/api/auth', AuthenticationRouter);

export default router;
