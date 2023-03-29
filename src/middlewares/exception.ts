import { Request, Response } from 'express';

export const exception = (err: Error, req: Request, res: Response) => {
    const message = err.message;

    res.status(400).json({ message });
};
