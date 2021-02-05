const express = require ('express');

const path = require('path');

//importing logger 
const logger = require('./middleware/logger');
//const members = require('./routes/api/members')
const members = require('./Members');
const app = express();





/*
//get all memebers
app.get('/api/members', function(req, res){
    res.json(members);
});

//get single memeber
app.get('/api/members/:id', function(req, res){
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`id: ${req.params.id} does not exist`})
    }

    
    //res.send(req.params.id);
});

*/
//init Middleware
//app.use(logger);

/*
app.get('/', function(req, res){
    
    //res.send(`<h1>Hello World From Express JS!</h1>`);
    //load html files
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    //we could send file, JSON, 
});
*/

//body parser Middleware
app.use(express.json());
//form submationn
app.use(express.urlencoded({extended:false}));
//set a static foloder
app.use(express.static(path.join(__dirname, 'public')));
//members API route 
app.use('/api/members', require('./routes/api/members'));
const PORT = process.env.PORT|| 5000;
app.listen(PORT, ()=>console.log(`Server is started on port http://localhost:${PORT}`));