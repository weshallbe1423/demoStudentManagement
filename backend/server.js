const http=require('http');

const app=require('./app');
const port=process.env.PORT||3000;

const server=http.createServer(app);
server.listen(port,()=>{
    console.log("server started at port :"+port);
console.log(process.memoryUsage())  
console.log(process.execPath)  
console.log(process.version)
console.log(process.platform);  



})