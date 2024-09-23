import mongoose from "mongoose";
// const mongoUrl = "mongodb://localhost:27017/Online_test_db";
const mongoUrl = process.env.MONGO_URL;
export const connectMongoDb = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl);
    conn && console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
