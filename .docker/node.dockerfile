FROM node:latest

LABEL author="Lloyd stumpel"

WORKDIR /var/www/angularnoderestfulservice

RUN npm install pm2 -g 

EXPOSE 3000

ENTRYPOINT ["pm2-runtime", "pm2config.yml"]