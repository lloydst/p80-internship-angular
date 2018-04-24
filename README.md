# Poort80 internship assignment
>prerequisites
  -  node v ^8.10.0 (with matching npm)
  -  mongodb or a mlab account (see data base for more information)
  
## contents
 - [getting started](#getting-started-)
 - [styling](#styling)
 - [sources](#sources-)
 - [Development](#development)
 - [quick component gen (angular cli)](#quick-component-gen-angular-cli-)
 - [structure](#structure)
 - [database](#database)
 - [usefull links](#usefull-links)
 - [docs](#docs)

## getting started:
`git clone https://github.com/lloydst/p80-internship-angular.git .` (replace the '.' with a directory if you would want it in a new folder)

## styling
scss goes into (or gets imported into) styles.scss in the src folder

## sources:
This project was started up with [Mean-boilerplate](https://github.com/lloydst/mean-boilerplate) , which is heavely based on the angular-cli and express-gen for the front and backend respectively.

## Development

run `npm run dev` for rebuilding on changes to any of the angular part of the website.
and run `npm run server` (in a other window)so that node restarts the express server on changes
run `npm run doc` to "generate" front end docs (only documents the angular app) since the back end can be found at ./api-docs

## quick component gen (angular cli)

Run `ng generate component componentname` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## structure
server contains all server related stuff.
 - "e2e"  Test related stuff. (for angular only )
 - "src" angular project.
 - "dist" the build version of your angular app (compressed)
 - "docs" documentation generated using type doc
 - node

## database
to connect to a database simple add a .env file in the root and type `MONGOURI = connectionstring` this can either be a local db or a external one like mlab

## usefull links
dev: ${host}= localhost:3000
prod: ${host}= example.com
 - ${host}/ auto reroutes to channel
 - ${host}/api-docs shows all possible api end points
 - localhost:8080 is the angularapp documentation (see development )
 - ${host}/api/{collection}/{?:id} possible api end points see api documentaion for more info

## docs
docs can be found at [https://lloydst.github.io/p80-internship-angular/](https://lloydst.github.io/p80-internship-angular/) though there is a big chance they are outdated to view the most recent you need to clone the project and run ```npm run doc``` (after the npm install ofc) this will generate it in the docs folder and server it on [localhost:8080](http://localhost:8080)