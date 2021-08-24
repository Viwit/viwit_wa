# build
FROM node:15.4.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

COPY configs/nginx/conf.d/ /etc/nginx/conf.d/
COPY configs/nginx/nginx.conf /etc/nginx/nginx.conf
COPY configs/nginx/ssl/ /etc/nginx/ssl/
RUN rm -rf /etc/nginx/conf.d/default.conf
# production
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]