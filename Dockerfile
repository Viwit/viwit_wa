FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL $VUE_APP_API_URL
COPY key/private.crt /usr/src/app/private.crt
COPY key/private.csr /usr/src/app/private.csr
COPY key/private.key /usr/src/app/private.key
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]