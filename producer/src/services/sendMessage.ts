import sqs from '../config/aws';
import { Vote } from '../models/vote';

export class SendMessage {

    send(vote: Vote) {
        const params = {
            DelaySeconds: 0,
            MessageBody: JSON.stringify(vote),
            QueueUrl: "http://localhost:4566/000000000000/votes"
        }

        return sqs.sendMessage(params).promise();
    }
}
