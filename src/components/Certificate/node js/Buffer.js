const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
    <html>
        <head>
            <title>form</title>
        </head>
    <body>
        <form action="/process" method="post">
            <input name="message" type="text"/>
        </form>
    </body>    
    </html>`);
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const data = [];
    req.on("data", chunk => {
      data.push(chunk);
    });

    req.on("end", () => {
      console.log("stream finished");
      const result = Buffer.concat(data).toString();
      console.log(result);
    });

    res.write("thanks for submiting");
    res.end();
  }
});

server.listen(3000);

console.log("server is running on port 3000");
