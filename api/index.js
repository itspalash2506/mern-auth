import express from 'express';

const app =express();
app.listen(5173, ()=>{
    console.log("Server is running on the port 5173 changed ");
})