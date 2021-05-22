import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  loggedIn: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    default: 'User',
  },
});
