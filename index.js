const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var fs = require('fs');

app.get('/', (req, res) => {
    fs.readFile('./db.json', 'utf8', (error, data) => {
        if(error){
           console.log(error);
           return;
        }
        res.json(JSON.parse(data));
   })
})

app.get('/update', (req, res) => {

    fs.writeFile ("db.json", JSON.stringify({http: String(req.query.http), websocket: String(req.query.websocket), api: String(req.query.api)}), function(err) {
        if (err) throw err;
            res.send('complete');
        }
    );
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));