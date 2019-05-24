# Download node
FROM node:10

#create the app directory
WORKDIR /user/src/app

#COPY package*.json ./
#COPY ./bin/server.js ./

#RUN npm install

EXPOSE 8080

CMD ["npm","start"]

