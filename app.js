const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(process.env.PORT || 8080);
