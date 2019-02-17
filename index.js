const app = require('./server/init');
const http = require('http').Server(app)
// const server = http.createServer(app);
const port = process.env.PORT || 3000;
http.listen(port,(err)=>{
    if(!err)
    console.log("server started on port :", port)
});

