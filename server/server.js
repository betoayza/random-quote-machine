import express from 'express';

const app = express();
const port = 3456

app.use(cors()); //la API da accesso desde cualquier origen

app.

app.listen(port, ()=>{
    console.log("Server listening on port: ", port);
});