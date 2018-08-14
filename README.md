# Poort80 internship assignment
[docs](https://lloydst.github.io/p80-internship-angular/)

![Doc coverage](https://lloydst.github.io/p80-internship-angular/images/coverage-badge.svg)
>prerequisites
  -  node v 8.10.0 (with matching npm)
  -  mongodb or a mlab account (see data base for more information)
  -  angular cli 6+ installed globally

## contents
 - [getting started](#getting-started-)
 - [docker](#docker)
 - [styling](#styling)
 - [sources](#sources-)
 - [description](#description)
 - [Development](#development)
 - [quick component gen (angular cli)](#quick-component-gen-angular-cli-)
 - [structure](#structure)
 - [database](#database)
 - [usefull links](#usefull-links)
 - [docs](#docs)

## getting started:
`git clone https://github.com/lloydst/p80-internship-angular.git .` (replace the '.' with a directory if you would want it in a new folder).


## styling
scss files are stored in the angular root (src folder) in a scss map and are being converted to css using grunt and then stored in the assets folder in the angular root.
`grunt build-sass` builds it

## sources:
This project was started up with [Mean-boilerplate](https://github.com/lloydst/mean-boilerplate) , which is heavely based on the angular-cli and express-gen for the front and backend respectively.

## Description

This project is my internship project at Poort80. The project is supposed to be displayed in a fullscreen browser and to be hosted on a local network, thus removing the need for logging in to admin. The project exists of three 'main' modules:
  - admin
  - channels
  - components

In the admin module the content of the components can be changed as well as the order and time a components is displayed on a channel.
The components module displays components based on the url. So will ${host}/components/weather display the current weather forecast and ${host}/components/weather-traffic-news will display 3 components(weather,traffic,news).
The channels module, opens a extra tab to navigate to a 'custom' component and will display said component for the time defined for the path. After that time/delay is done it will close the tab and open a new one with the next tab and thus next component. once it has finished all the paths it will check the database for changes will run again.

## Development

run `ng build --watch` for rebuilding on changes to any of the angular part of the website.
and run `npm run server` (in a other window)so that node restarts the express server on changes
run `npm run doc` to "generate" front end docs (only documents the angular app) since the back end can be found at ./api-docs


## quick component gen (angular cli)

Run `ng generate component componentname` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## structure
server contains all server related stuff.
 - "e2e"  Test related stuff. (for angular only )
 - "src" angular project.
 - "dist" the build version of your angular app (generated after npm install or ng build commands)
 - "docs" documentation generated using compodoc
 - node

## database
to connect to a database simply add a .env file in the root and type `MONGOURI = connectionstring` this can either be a local db or a external one like mlab

## usefull links
dev: ${host}= localhost:3000
prod: ${host}= example.com
 - ${host}/ auto reroutes to channel
 - ${host}/api-docs shows all possible api end points
 - localhost:8080 is the angularapp documentation (see development )
 - ${host}/api/{collection}/{?:id} possible api end points see api documentation for more info

## docs
docs can be found at [https://lloydst.github.io/p80-internship-angular/](https://lloydst.github.io/p80-internship-angular/) though there is a big chance they are outdated to view the most recent you need to clone the project and run ```npm run doc:watch``` (after the npm install ofc) this will generate it in the docs folder and server it on [localhost:8080](http://localhost:8080).
Or you use ``` npm run doc ``` and if the server is running (both npm start and npm run server) you can acces it at (local)host(:port)/docs

## docker
docker tends to fail on npm install scripts due to it starting up with the wrong proxy, set this to 8.8.8.8 if you havn't. if it is set to this port and still fails make shure to restart docker

build initial image (auto-updates front-end for production)

`docker-compose build` 

start containers(local)

`docker-compose up` -d for detached mode run & `docker-compose down` to close it

when you have made changes force a clean build of docker-images

`docker-compose up --build` 

push images to their repository

`docker-compose push`

run the img on a port (3000 in example below)
`docker run -p 3000:3000 lloydst/p80-tool`

