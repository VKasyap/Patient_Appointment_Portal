import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AppointmentSchema = new Schema({
  hospitalId:{
    type: String,
  },
  patientName: {
    type: String,
  },
  specialist: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  dateOfAppointment: {
    type: Date,
  },
  contact: {
    type: String,
  },
  status:{
    type: String,
    default: "Pending"
  },
});
