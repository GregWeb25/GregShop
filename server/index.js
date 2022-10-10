const express = require('express');
const models = require('./models/models.js');
const sequelize = require('./db.js');
const cors = require('cors');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErrorHandlindMiddleware.js');
const fileUpload = require('express-fileupload');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.static(path.resolve('./static')));
app.use(fileUpload({}));
app.use('/api', router);

// error handler must be last
app.use(errorHandler);

app.get('/',(req,res)=>{
    res.status(200).json({message: 'Server works!'});
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port,() => console.log(`Server start on http:/localhost:${port}`));
    } catch (e) {
        console.log(e);
    }
}

start();