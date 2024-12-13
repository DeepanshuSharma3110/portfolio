import app from './index.js';
import mongoose  from 'mongoose';
const port = process.env.PORT;
console.log(port);
const dbUri = process.env.DB;
mongoose.connect()

app.listen(port,()=>{
    console.log('server is running at port no ',port);
});
