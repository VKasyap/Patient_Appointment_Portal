import mongoose from "mongoose";
import { AppointmentSchema } from "../Modal/AppointmentModal";

const Appointment = mongoose.model("appointment", AppointmentSchema);

export const bookAppointment = (req, res) => {
  let newAppointment = new Appointment(req.body);
  newAppointment.save((err, appointment) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(appointment);
  });
};

export const appointmentsList = (req, res) => {
  Appointment.find().then((data) => {
    const pendingData = data.filter((i) => i.status === "Pending");
    res.json(pendingData);
  });
};
