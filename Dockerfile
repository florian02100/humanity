# syntax=docker/dockerfile:1

FROM node:14.17.6
ENV NODE_ENV=production

WORKDIR /

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --save

COPY . .

CMD [ "npm", "run", "client" ]