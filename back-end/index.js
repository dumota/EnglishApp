import express from 'express';
import mongoose from 'mongoose';
import Routes from './routes/route.js'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const url = 'mongodb://localhost:27017/english';


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/words', Routes);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(()=>{
    app.listen(3001,()=>{
        console.log("server is runing")
    })
}).catch((error)=>{
    console.log("Erro ao conectar", error.message)
})

