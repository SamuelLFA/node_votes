import sqs from './config/aws';
import { Vote } from './models/vote';
import { ReceiveMessage } from './services/receiveMessage';

const receiveMessage = new ReceiveMessage(sqs);

const main = async () => {
    while (true) {

        const messages = await receiveMessage.receive();
        messages?.map((message: Vote) => {
            const vote: Vote = message;

            console.log(vote);
        })
    }
}

main()