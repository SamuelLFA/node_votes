import { config, SQS } from 'aws-sdk';

config.update({ region: 'us-east-1' });
const sqs = new SQS({ apiVersion: '2012-11-05' })

export default sqs;
