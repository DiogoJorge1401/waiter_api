import { NextFunction, Request, Response } from 'express';

export const exception = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const message = err.message;

  res.status(400).json({ message });
};
