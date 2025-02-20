FROM node:23.8.0-alpine

WORKDIR /src

COPY package*.json .
COPY .htaccess .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
