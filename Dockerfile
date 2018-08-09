
# Client App
FROM lloydst/p80-tool
LABEL authors="Lloyd Stumpel"
WORKDIR src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
RUN ng build --prod

# Node server
FROM node:8.11-alpine as node-server
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY /src/server /usr/src/app

# Final image
FROM node:8.11-alpine
WORKDIR /usr/src/app
COPY --from=node-server /usr/src /usr/src
COPY --from=client-app /usr/src/app ./
EXPOSE 3000
CMD ["npm", "start"]
