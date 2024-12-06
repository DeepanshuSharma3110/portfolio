import app from './index.js';

const port = process.env.PORT;
console.log(port);

app.listen(port,()=>{
    console.log('server is running at port no ',port);
});
