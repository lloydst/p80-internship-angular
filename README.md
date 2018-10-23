# Poort80 internship assignment
[![Build Status](https://travis-ci.org/lloydst/p80-internship-angular.svg?branch=master)](https://travis-ci.org/lloydst/p80-internship-angular)
[docs](https://lloydst.github.io/p80-internship-angular/)

![Doc coverage](https://lloydst.github.io/p80-internship-angular/images/coverage-badge.svg)
> prerequisites
  -  node v 8.10.0 (with matching npm)
  -  mongodb or a mlab account (see data base for more information)
  -  angular cli 6.1 + installed globally

## contents
 - [getting started](#getting-started-)
 - [styling](#styling)
 - [sources](#sources-)
 - [description](#description)
 - [Development](#development)
 - [Production](#production)
 - [quick component gen (angular cli)](#quick-component-gen-angular-cli-)
 - [structure](#structure)
 - [database](#database)
 - [usefull links](#usefull-links)
 - [docs](#docs)

## getting started:
 - mutual:
    `git clone https://github.com/lloydst/p80-internship-angular.git .` (replace the '.' with a directory if you would want it in a new folder).
 - dev: create a .env file with the same fields as the .env-example. you will just have too request the api keys your self

 - production: instead of a .env file set the same variables but this time in the actual environment instead of just a file.
    and replace them with your own api keys

then use `npm install` in the project root, this will install all the dependencies and do a single production-ready build.
then if you are 


## Description

This project is my internship project at Poort80. The project is supposed to be displayed in a fullscreen browser and to be hosted on a local network, thus removing the need for logging in to admin. The project exists of three 'main' modules:
  - admin
  - channels
  - components

In the admin module the content of certain components can be changed as well as the order and time a components is displayed on a channel.
The components module displays components based on the url. So  ${host}/components/weather will display the current weather forecast (--*depricated and ${host}/components/weather-traffic-news will display 3 components(weather,traffic,news) *depricated--).
The channels module, opens a extra tab to navigate to a (custom) component and will display said component for the time defined for the path. After that time/delay is done it will open the next 'slide' in the same windownext tab and thus next component. once it has finished all the paths it will quickly check the database for changes and will start over again.

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

## styling
scss files are stored in the angular root (src folder) in a scss map and are being converted to css using grunt and then stored in the assets folder in the angular root.
`grunt watch` watches the scss folder for changes and updates the assets/css with changes

## sources:
This project was started up with [Mean-boilerplate](https://github.com/lloydst/mean-boilerplate) , which is heavely based on the angular-cli and express-gen for the front and backend respectively.
