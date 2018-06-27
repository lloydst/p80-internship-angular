FROM node:latest

LABEL author="Lloyd stumpel"
# need to check if i can make it lighter by removing the angular stuff (including compodoc from the image) 

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install @angular/cli@6.0.0 -g
RUN npm install
RUN ng build --prod --aot

COPY . /usr/src/app

RUN npm install pm2 -g 

EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "pm2config.yml"]