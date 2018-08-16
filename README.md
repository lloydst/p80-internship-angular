# Poort80 internship assignment
[docs](https://lloydst.github.io/p80-internship-angular/)

![Doc coverage](https://lloydst.github.io/p80-internship-angular/images/coverage-badge.svg)
> prerequisites
  -  node v 8.10.0 (with matching npm)
  -  mongodb or a mlab account (see data base for more information)
  -  angular cli 6.1 + installed globally

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
then use `npm i` in the project root, this will install all the dependencies and do a single production-ready build,

## styling
scss files are stored in the angular root (src folder) in a scss map and are being converted to css using grunt and then stored in the assets folder in the angular root.
`grunt watch` watches the scss folder for changes and updates the assets/css with changes

## sources:
This project was started up with [Mean-boilerplate](https://github.com/lloydst/mean-boilerplate) , which is heavely based on the angular-cli and express-gen for the front and backend respectively.

## Description

This project is my internship project at Poort80. The project is supposed to be displayed in a fullscreen browser and to be hosted on a local network, thus removing the need for logging in to admin. The project exists of three 'main' modules:
  - admin
  - channels
  - components

In the admin module the content of the components can be changed as well as the order and time a components is displayed on a channel.
The components module displays components based on the url. So  ${host}/components/weather will display the current weather forecast --*depricated and ${host}/components/weather-traffic-news will display 3 components(weather,traffic,news) *depricated--.
The channels module, opens a extra tab to navigate to a (custom) component and will display said component for the time defined for the path. After that time/delay is done it will close the tab and open a new one with the next tab and thus next component. once it has finished all the paths it will quickly check the database for changes and will start over again.

## Development

run `ng build --watch` for rebuilding on changes to any of the angular part of the website.
and run `npm run server` (in an other cmd)so that node restarts the express server on changes made to the server (this includes staticly server folders like dist)
run `npm run doc` to "generate" front end docs (only documents the angular app) since the back end can be found at ./api-docs


## quick component gen (angular cli)

Run `ng g c componentName` to generate a new component. You can use the angular scematics: module|directive|pipe|service|class|guard|interface|enum| as well as the ngrx schematics for effects reducers actions.

## structure
 -root
    - "e2e"  Test related stuff. (for angular only )
    - "src" angular project.
    - "dist" the build version of your angular app (generated after npm install or ng build commands)
    - "docs" documentation generated using compodoc
    - "server" server related files
 - server.js server init/setup file
 - package.json dependancies 
 - other files (mostly configs)

## database
to connect to a database simply create a .env file in the root and type `MONGOURI = connectionstring` this can either be a local db or a external one like mlab

## usefull links
dev: ${host}= localhost:3000
prod: ${host}= example.com
 - ${host}/ auto reroutes to channel
 - ${host}/api-docs shows all possible api end points
 - ${host}/docs is the angularapp documentation (see development )
 - ${host}/api/{collection}/{?:id} possible api end points see api documentation for more info

## docs
docs can be found at [https://lloydst.github.io/p80-internship-angular/](https://lloydst.github.io/p80-internship-angular/) though there is a big chance they are outdated to view the most recent you need to clone the project and run ```npm run doc:watch``` (after the npm install ofc) this will generate it in the docs folder and you can acces it at (local)host(:port)/docs

## docker
docker tends to fail on npm install scripts due to it starting up with the wrong proxy, set this to 8.8.8.8 if you havn't. if it is set to this port and still fails make shure to restart docker. i currently have it setup so that docker cloud builds it since linux containers doesnt seem to be working.

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

