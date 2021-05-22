import mongoose from "mongoose";
import { UserSchema } from "../Modal/UserModal";

const User = mongoose.model("user", UserSchema);

export const addUser = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, User) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(User);
  });
};

export const UsersList = (req, res) => {
  User.find().then((data) => {
    res.json(data);
  });
};

export const signIn = (req, res) => {
  const reqdata = req.body;
  User.find({ email: reqdata.email }).then((data) => {
    const finalData = data[0];
    if(data && data.length > 0){
      if (reqdata.password === finalData.password) {
        finalData.loggedIn = true;
        res.json(finalData);
      } else {
        res.status(500).send("invalid details");
      }
    }else {
      res.status(422).send("Please sign up");
    }
  });
};
