const { default: mongoose } = require("mongoose");

export const connectDB = async () => {
  try {
    let connection = mongoose.connect(process.env.MOGODB_URI, {
      dbName: "work-manager",
    });

    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
