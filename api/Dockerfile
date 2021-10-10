FROM node:14
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm i
EXPOSE 8080
CMD ["node", "server.js"]