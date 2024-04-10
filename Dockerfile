FROM node:18

WORKDIR /app

RUN yarn global add pnpm

RUN groupmod -g 1003 node
RUN usermod -u 1003 -g node node

RUN chown node:node -R /app

USER node