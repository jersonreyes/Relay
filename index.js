const express = require('express')
const app = express()
const port = 80
var fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('./db.txt', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        res.send(data);
   })
})

app.get('/update', (req, res) => {

    fs.writeFile ("db.txt", String(req.query.subdomain), function(err) {
        if (err) throw err;
            res.send('complete');
        }
    );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})