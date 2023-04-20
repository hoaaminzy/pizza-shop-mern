const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const Pizza = require("./models/pizzaModels");
const Pizzas = require("../data/pizza-data");

dotenv.config();
connectDB();
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = Pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("DATA IMPOrted".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
