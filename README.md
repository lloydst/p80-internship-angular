# Poort80 internship assignment
## getting started:
`git clone https://github.com/lloydst/p80-internship-angular.git .` (replace the '.' with a directory if you would want it in a new folder)

### sources:
This project was started up with [Mean-boilerplate](https://github.com/lloydst/mean-boilerplate) , which is heavely based on the angular-cli and express-gen for the front and backend respectively.

#prerequisites
  -  node v ^8.10.0 (with matching npm)
  -  mongodb or a mlab account (see data base for more information)
  -  and lastly nodemon installed globally (`npm i nodemon -g`)
  
## Development server

run `npm run dev` for rebuilding on changes to any of the angular part of the website.
and run `npm run server` (in a other window)so that node restarts the express server on changes

## quick component gen (angular cli)

Run `ng generate component componentname` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## structure
server contains all server related stuff.
 - "e2e"  Test related stuff. (for angular only )
 - "src" angular project.
 - "dist" the build version of your angular app (compressed)
 - node

## database
to connect to a database simple add a .env file in the root and type `MONGOURI = connectionstring` this can either be a local db or a external one like mlab
