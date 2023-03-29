import { ErrorRequestHandler } from 'express';

export const exception: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400).json({ message: err.message });
    next();
};
