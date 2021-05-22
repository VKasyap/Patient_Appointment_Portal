import mongoose from "mongoose";
import { HospitalSchema } from "../Modal/Modal";

// const Hospital = mongoose.model(<Collection Name>, HospitalSchema);
const Hospital = mongoose.model("hospitals", HospitalSchema);

export const getHospitals = (req, res) => {
  if (Object.keys(req.query).length !== 0 ) {
    Hospital.find().then((data) => {
      const filteredData = data.filter((i) => {
        if (i.name.toLowerCase().includes(req.query.searchVal.toLowerCase())) {
          return true;
        }
      });
      res.json(filteredData);
    });
  } else {
    Hospital.find().then((data) => {
      res.json(data);
    });
  }
};

export const addNewHospital = (req, res) => {
  let newHospital = new Hospital(req.body);
  newHospital.save((err, hospital) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(hospital);
  });
};
