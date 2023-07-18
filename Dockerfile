FROM node:18-alpine

WORKDIR /usr/src

COPY . /usr/src

RUN apk update

RUN apk add xsel

RUN npm install

RUN npm run build

RUN npm install --global serve

CMD ["serve", "-s", "/usr/src/build"]
