import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNo: {
    type: String,
    validate: {
      validator: (v) => /^\d{10}$/.test(v),
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  address: { type: String },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
