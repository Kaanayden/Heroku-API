const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => 
{
    let checkUrl = req.query.toCheckUrl;
    let adElementUrl = req.query.adElementUrl;
    res.send( checkUrl + " " + adElementUrl );
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));