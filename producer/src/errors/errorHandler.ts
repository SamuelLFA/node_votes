import { Request, Response } from 'express';

export function handler(error: Error, _: Request, response: Response, __: Function) {
    response.status(500).json({
        'error': error.message ? error.message : error
    });
}