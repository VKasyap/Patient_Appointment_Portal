import { getHospitals, addNewHospital } from "../Controller/Controller";
import {
  bookAppointment,
  appointmentsList,
} from "../Controller/AppointmentController";
import {
  addUser,
  signIn
} from "../Controller/UserController";

export const Routes = (app) => {
  app.route("/hospitals").get(getHospitals);
  app.route("/addHospital").post(addNewHospital);
  app.route("/bookAppointment").post(bookAppointment);
  app.route("/appointmentsList").get(appointmentsList);
  app.route("/signUp").post(addUser);
  app.route("/signIn").post(signIn);
};
