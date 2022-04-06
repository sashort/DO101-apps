const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = '<h1>This is version <b>2</b> of the app.</h1>' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
