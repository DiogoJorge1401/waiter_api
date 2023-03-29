import { RequestHandler } from 'express';
import { exception } from './exception';

export const endpoint = (handler: RequestHandler): RequestHandler => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (err) {
            exception(err as Error, req, res);
        }
    };
};
