import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected Successfully!"))
  .catch((err) => {
    console.error(" MongoDB Connection Error:", err);
    process.exit(1);
  });

export default mongoose;
