FROM node:14

WORKDIR /app

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install && npm install -g jest

COPY . .

CMD ["npm", "test"]
