const express = require("express");
const app = express();

app.get("/", (req,res)=>{ //route handler, manejador de ruta

    res.send("Hello World, this is the root route");
});

app.listen(3000);
app.get("/uno", (req, res)=>{ //route handler, manejador de ruta

    res.send("Hello World, from route One");
});


app.get("/test", (req,res)=>{ //manejador de ruta
    
    res.send("<h1>Esta es una prueba, hola a todo el mundo</h1>");

});

