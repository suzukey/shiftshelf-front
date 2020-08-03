FROM node:14.7.0-slim

WORKDIR /app

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo
ENV NUXT_HOST 0.0.0.0

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3000
CMD ["yarn", "dev"]
