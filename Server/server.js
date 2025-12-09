import express from "express";

const app = express();


// app.get('/',(req,res)=>{
//     res.send('hello')
// })

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"joke1"
        },
        {
            id:2,
            title:"joke2"
        },
        {
            id:3,
            title:"joke3"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`server start on port ${port}`);
    
})