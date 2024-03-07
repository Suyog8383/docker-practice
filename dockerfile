FROM node:latest
RUN npm i -g nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5500
CMD [ "npm","run","dev" ]
