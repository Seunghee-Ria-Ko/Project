const mongoose = require("mongoose");
const config = require("./key");

const dbConnect = async () => {
  try {
    // const db_url = "mongodb://localhost:27017/Recipes";
    const db_url = config.mongoURL;

    await mongoose
      .connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connedted successfully!"))
      .catch((err) => console.log(err));

    const conn = await mongoose.connection;

    conn.once("connected", function () {
      console.log("Connected to MongoDB database successfully!");
    });

    conn.on("disconnected", function () {
      console.log("database is disconnected successfully");
    });
  } catch (err) {
    console.error(err.message);
  }
};

//export function
module.exports = dbConnect;
