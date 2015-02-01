var http = require('http');
http.createServer(function (req, res) {
  if ((req.headers='GET') && (req.url='/api/stats')) {
    var exec = require('child_process').exec,
    child;
  child = exec('ps|grep BungeeCord.jar',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('stdout\n');
  } else {res.writeHead(404, {'Content-Type': 'text/plain'});res.end('404 Not Found\n');console.log("Catched 404\n")}
}).listen(41876, '127.0.0.1');
console.log('Server running at http://127.0.0.1:41876/');