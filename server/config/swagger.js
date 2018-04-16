const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
var swaggerDefinition = {
    info: { // API informations (required)
      title: 'P80 api documentation', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'api documentation for lloydst internship assignment angular/front end documentation can be found at http://localhost:8080 after `npm run doc` has been run', // Description (optional)
    },
    host: 'localhost:3000/', // Host (optional)
    basePath: 'api', // Base path (optional)
  };
  var swaggerOptions = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./server/routes/index.js'],
  };
  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  module.exports = swaggerSpec;