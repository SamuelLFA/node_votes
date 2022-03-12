import { Vote } from "../models/vote";

export class ReceiveMessage {
    sqs: AWS.SQS;

    constructor(sqs: AWS.SQS) {
        this.sqs = sqs;
    }

    async receive() {
        const params = {
            MaxNumberOfMessages: 10,
            QueueUrl: "http://localhost:4566/000000000000/votes",
            VisibilityTimeout: 0,
            WaitTimeSeconds: 0
        };

        const messages = await this.sqs.receiveMessage(params).promise();
        for (const message in messages.Messages) {
            const deleteParams = {
                QueueUrl: "http://localhost:4566/000000000000/votes",
                ReceiptHandle: messages.Messages[Number(message)].ReceiptHandle || ''
            };

            await this.sqs.deleteMessage(deleteParams).promise();
        }

        return messages.Messages?.map((message) => JSON.parse(message.Body || '')).map((message: Vote) => <Vote>message);
    }
}
