//this is only to do SSR so that I can show off my work to someone close.

import express from 'express';

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.render('index.ejs');
});

app.listen(port, ()=>{
    console.log(`app listening at port ${port}.`);
})


//Caps 2 Personal Website