const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/index.html") {
        res.statusCode = 200;
        res.setHeader("content-type", "text/html");
        res.end("<h1>Hi</h1>");
    } else {
        const info = url.parse(req.url, true);
        if (info.pathname == "/SUBMIT") {  // pathname = action attribute in form
            console.log("name entered is: " + info.query["yourName"]);
            res.statusCode = 200;
            res.setHeader("content-type", "text/html");
            res.end("<h1>Hi, " + info.query["yourName"] +"</h1>");
        } else {
            res.statusCode = 404;
            res.setHeader("content-type", "text/html");
            res.end("<h1>File not found</h1>");
        }
    }
}).listen(1234, "localhost");