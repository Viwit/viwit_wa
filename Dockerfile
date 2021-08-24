FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL $VUE_APP_API_URL
COPY key/cert.pem /usr/src/app/cert.pem
COPY key/copyCert.pem /usr/src/app/copyCert.pem
COPY key/copyKey.pem /usr/src/app/copyKey.pem
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]