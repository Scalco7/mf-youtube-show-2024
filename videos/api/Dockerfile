FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3050
CMD ["npm","run", "start"]