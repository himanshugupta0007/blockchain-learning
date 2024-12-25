const app = require('../app')

const HTTP_PORT = process.env.HTTP_PORT || 3001;

// start the server
app.listen(HTTP_PORT, (request, response) => {
    console.log(`Server Starting at Port ${HTTP_PORT}`);
  });