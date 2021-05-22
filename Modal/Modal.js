import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const HospitalSchema = new Schema({
  hospitalId: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
  },
  location: {
    type: String,
  },
  contact: {
    type: String,
  },
  bestDoctor: {
    type: String,
  },
  rating:{
    type: Number
  },
});
