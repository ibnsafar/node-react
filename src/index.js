const express = require('express');
const bodyParser = require("body-parser");
const {apiresponse} = require("./helpers/ApiResponse");
const ArticleRoute = require("./routes/ArticleRoute");
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use('/api', ArticleRoute)
app.all("*", (req,
              res) => {
    return apiresponse(404, res, 'Page Not Found')
})

app.listen(port, () => console.log(`CRUD APP listening on port ${port}!`))