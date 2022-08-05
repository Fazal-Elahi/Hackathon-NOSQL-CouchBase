var express = require("express");
var backend = require('./backend')
var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/articles/:info", (req, res, next) => {
    const article = req.params.info
    backend.api_parsing(article)
        .then((data) => {
            res.json(data.content)
        })
});
