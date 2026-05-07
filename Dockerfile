FROM node:22-slim
WORKDIR /app
COPY package.json ./
COPY src/ ./src/
EXPOSE 3333
CMD ["node", "src/server.js"]
