#!/bin/bash
set -x

# Create queue
awslocal sqs create-queue --queue-name votes

set +x