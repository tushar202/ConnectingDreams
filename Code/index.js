const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorMiddleWare = require('./middleware/error')

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
require('./utils/connectdb');

//Router imports
const userRouter = require('./routes/userRoutes');
const teamRouter = require('./routes/teamRoutes');

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

app.use(errorMiddleWare)
//Base Routes
app.use('/user', userRouter);
app.use('/team',teamRouter);

app.get('/', (req,res) => {
    res.send('HOME');
})

app.get('*', (req,res) => {
    res.send('Error 404!');
})

app.listen(PORT, () => {
    console.log(`Serving on PORT ${PORT}`);
})