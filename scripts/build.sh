#!/bin/bash

docker build \
    -t node:alpine-v20 \
    -f Dockerfile \
    --build-arg osUserId=$(id -u) \
    --build-arg osGroupId=$(id -g) .
