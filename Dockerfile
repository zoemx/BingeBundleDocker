FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli

RUN npm run build

EXPOSE 4200

CMD ["ng", "serve", "--host=0.0.0.0"]