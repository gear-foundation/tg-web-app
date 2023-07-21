FROM node:18-alpine

WORKDIR /usr/src

COPY . /usr/src

RUN apk update

RUN apk add xsel

ARG WEB_APP_URL

ENV WEB_APP_URL=${WEB_APP_URL}

RUN npm install

RUN npm run build

RUN npm install --global serve

CMD ["serve", "-s", "/usr/src/build"]
