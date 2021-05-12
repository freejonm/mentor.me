// Loading environmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db'); // loads our connection to the mongo database
const routes = require("./routes");
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 3001;

const cors = require('cors')
const socket = require('socket.io')



// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  secret: process.env.APP_SECRET || 'this is the default passphrase',
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));

// Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// If its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	// console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use(express.static("client/build"));
	// app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
	// app.get('/', (req, res) => {
	// 	res.sendFile(path.join(__dirname, '../client/build/'))
	// });
}

// Add routes, both API and view
app.use(routes);

// Error handler
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

// Starting Server
const server = app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const io = socket(server, {
	cors: {
		origin: 'http://localhost:3000'
	}
})

io.on('connection', (socket) => {
	console.log(socket.id)

	socket.on('join_room', (data) => {
		socket.join(data)
		console.log('User Joined Room: ' + data)
	})

	socket.on('send_message', (data) => {
		console.log(data)
		socket.to(data.room).emit('receive_message', data.content)
	})



	socket.on('disconnect', () => {
		console.log('User disconnected')
	})
})