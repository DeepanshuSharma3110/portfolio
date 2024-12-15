import app from './index.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000; 
const dbUri = process.env.DB;

app.listen(port,()=>{
    console.log('server is listening at port no', port);
});

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('database connected sucessfully'))
.catch((err)=>console.log('error while connecting to the databse',err))
