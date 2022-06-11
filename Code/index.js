const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorMiddleWare = require('./middleware/error')
const multer=require('multer');


if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
require('./utils/connectdb');

//Router imports
const userRouter = require('./routes/userRoutes');
const cdfRouter = require('./routes/cdfRoutes');
const teamRouter = require('./routes/teamRoutes');
const sioRouter=require('./routes/sioRoutes')


const app = express();
const PORT = process.env.PORT || 7000;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus:200,
}));

// const fileStroge=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'media');
//     },
//     filename:(req,file,cb)=>{
//         cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname);
//     }
// })

// const fileFilter=(req,file,cb)=>{
//     if(
//         file.mimetype==='media/pdf'||
//         file.mimetype==='media/jpg'||
//         file.mimetype==='media/jpeg'
//     ){
//         cb(null,true);
//     }else{
//         cb(null,false);
//     }
// }

// app.use(multer({storage:fileStroge,fileFilter:fileFilter}).single('media'));

app.use(errorMiddleWare)
//Base Routes
app.use('/user', userRouter);
app.use('/cdf', cdfRouter);
app.use('/team',teamRouter);

app.use('/sio',sioRouter)
app.get('/', (req,res) => {
    res.send('HOME');
})

app.get('*', (req,res) => {
    res.send('Error 404!');
})

app.listen(PORT, () => {
    console.log(`Serving on PORT ${PORT}`);
})