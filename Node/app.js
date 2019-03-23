const os = require('os');
const fs = require('fs');
const http = require('http');


console.log('Hello World');
console.log('Architecture ' +  os.arch());
console.log('CPUs'  + os.cpus().length);
console.log('OS ' + os.platform() );

//Q3

//const fileName = __dirname + '/test.txt' ;

/* fs.readFile(fileName , (err,data) => {
     if (err){
         console.error(err);

     }
     console.log(data.toString());
   //  console.log(data);
 });*/

 /*const data = fs.readFileSync(fileName);
 console.log(data.toString());*/

 //Q4

 /*const fileName =  __dirname  + '/test.txt';
 const outFileName =  __dirname + '/text-copy.txt';

 const readStream = fs.createReadStream(fileName);
 const writeStream = fs.createWriteStream(outFileName);

 readStream.pipe(writeStream);

 readStream.on('data', data => {
    console.log(data.toString());

 });*/


 //Q5

  http.createServer((req ,res) => {
    //res.writeHeader(200 , {'Context-Type' : 'text/html : charset = utf-8'});
    res.setHeader ('Context-Type', 'text/html ');
  //  res.write('<h1> Hello WORLD </h1>');
  //  res.end();
      switch (req.method) {

          case 'GET' :
              res.write('<h1> Hello WORLD </h1>');
              res.end();
              break;
          case 'POST' :
              req.on('data' , data => {
              res.write('<h1> Hello' + data + '</h1>');
              res.end();
              });
              break;

      }


  }).listen(3000 , (err) => {
      console.log('Server is listening to port 3000');
  });

