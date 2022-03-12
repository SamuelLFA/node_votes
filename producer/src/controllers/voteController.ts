import { Request, Response } from 'express';
import { Vote } from '../models/vote';
import { SendMessage } from '../services/sendMessage';

export class VoteController {
    private sendMessage: SendMessage;

    constructor(sendMessage: SendMessage) {
        this.sendMessage = sendMessage;
    }

    async save(request: Request, response: Response, next: Function) {
        try {
            if (!request.body || !request.body.choose || isNaN(request.body.choose)) {
                return response.status(400).json({
                    'error': 'choose is invalid or is empty'
                });
            }
            const vote: Vote = request.body;

            await this.sendMessage.send(vote);

            return response.status(200).json({
                'message': 'vote computed'
            });
        } catch (err: unknown) {
            next(err);
        }
    }
}
