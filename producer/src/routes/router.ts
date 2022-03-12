import { Router } from 'express';

import { handler } from '../errors/errorHandler';
import { VoteController } from '../controllers/voteController';
import { SendMessage } from '../services/sendMessage';

const sendMessage = new SendMessage();
const voteController = new VoteController(sendMessage);

const route = Router();

route.post('/newVote', voteController.save.bind(voteController));
route.use(handler);

export default route;