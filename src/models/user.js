import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  about: String,
  profileUrl: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
