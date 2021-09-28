const express = require('express');
const path = require('path');//unifica las rutas en los distintos S.O.para que express identifique las rutas origen destino
const app = express();

app.listen(process.env.PORT || 3001, () => {
    console.log('Server running on port 3000');
});

//la variable dirname hace referencia a la ubicacion deonde nos encontramos
const publicPath = path.resolve(__dirname, './public');//le decimos a path que resuelva la ruta que se le pasa
app.use( express.static(publicPath) );//le decimos a express que queremos tener la carpeta public como recurso de archivos estaticos

app.get('/',(req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/login',(req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
app.get('/register',(req, res)=> {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});