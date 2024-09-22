import { Request, Response } from 'express';

const loginUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'login page' });
};

export default loginUser;
