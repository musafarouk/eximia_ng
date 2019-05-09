
//Begin server.js here
const  express = require('express'),
	   morgan = require('morgan')
	   path = require('path');


//making intsace of express app 
const app = express()

//setting up middleware 
//logger 
app.use(morgan('dev'));
//TODO: static file middlewar
app.use(express.static(path.join(__dirname,'public')));

// app.use(express.static(path.join(__dirname, 'assets')));
// app.set('views', './public')

//test route 
app.get('/', (req, res) => {
	res.render('index')
})
//Select port to use
const port = process.env.PORT || 3009

//starting the server 
app.listen(port, () => console.log(`server started on localhost:${port}`))

