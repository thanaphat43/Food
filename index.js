const express = require('express');
const app = express();
const restaurantsRouter = require ('./router/restaurants');

const hbs = require('express-handlebars');
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}))



// app.get('/',(req,res)=>{
//     res.send('<h1>Hello API</h1>');

// });
app.use('/',restaurantsRouter);

app.listen(3000,()=>{
    console.log('listening to port 3000')
});
