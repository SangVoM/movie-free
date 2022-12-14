FROM node:7.5-alpine

WORKDIR /src

# install and cache package.json
COPY package.json /src
RUN npm install --production

# Bundle app source
COPY . /src

EXPOSE 6969

CMD ["npm","start"]
