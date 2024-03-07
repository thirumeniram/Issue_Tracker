const mongoose = require('mongoose');

 mongoose.connect(`mongodb+srv://thirumeniram25:UFTrAaWowsVDvDGB@cluster0.yovuhn0.mongodb.net/`);

const db = mongoose.connection;

db.on("error", (error) => console.error("error in connecting with db:", error));

  db.once("open", () => {
    console.log("succesfully connected with mongodb");
  });


module.exports = db;