// Loading environmental variables here
if (process.env.NODE_ENV !== "production") {
  console.log("loading dev environments");
  require("dotenv").config();
}
require("dotenv").config();

const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const dbConnection = require("./db"); // loads our connection to the mongo database
const routes = require("./routes");
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

const cors = require("cors");
const socket = require("socket.io");

const db = require("./models");

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.APP_SECRET || "this is the default passphrase",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// If its production environment!
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  console.log("YOU ARE IN THE PRODUCTION ENV");
  app.use(express.static("client/build"));
  app.use(
    "/static",
    express.static(path.join(__dirname, "../client/build/static"))
  );
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/"));
  });
}

// Add routes, both API and view
app.use(routes);

// multer image storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../client/public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

// multer routes
app.post("/api/profile", upload.single("avatar"), function (req, res, next) {
	console.log(req.file);

	db.User.findOneAndUpdate({_id: req.user._id}, { $set: { profilePicture: `/uploads/${req.file.originalname}` } }, { new: true })
		.then(dbUser => res.json(dbUser))
		.catch(err => res.status(422).json(err))
	
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

// Error handler
app.use(function (err, req, res, next) {
  console.log("====== ERROR =======");
  console.error(err.stack);
  res.status(500);
});

// Starting Server
const server = app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const io = socket(server, {
  cors: {
    // origin: 'http://localhost:3000'
		origin: 'http://mentorme3000.herokuapp.com/'
  },
});

let prevMessages = [];

io.on("connection", (socket) => {
  console.log("Your id is: " + socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log("User Joined Room: " + data);

    console.log("sending saved messages...");
    console.log("Data: " + data);

    db.Message.find({}, function (err, savedMessages) {
      if (err) throw err;
      console.log("Here are the saved messages: " + savedMessages);

      savedMessages.map((message) => {
        if (message.room) {
          console.log("Nuke content " + message.content);
          prevMessages.push(message.content);
          console.log("Please" + prevMessages);
        }
      });
    });
    socket.to(data).emit("receive_message", prevMessages);
  });

  socket.on("send_message", (data) => {
    // console.log(data)
    // console.log(data.content)
    let newMsg = new db.Message({
      room: data.room,
      content: {
        author: data.content.author,
        message: data.content.message,
      },
    });
    newMsg.save(function (err) {
      if (err) throw err;
    });

    socket.to(data.room).emit("receive_message", data.content);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
