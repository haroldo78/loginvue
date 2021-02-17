const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// Initialize the app
const app = express();

// Middlewares
// Form Data Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Seting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require('./config/passaport')(passport);


//DB Confing URL
const db = require('./config/keys').mongoURI;
//Connect to Mongo
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Erro to connect with the database ${err}`)
});



//Routes
const users = require('./routes/api/users');
app.use('/api/users', users);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})