const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken')
const Patient = require('../Models/patient')

const doctorSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password shouldnt contain the word password");
        }
      },
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
},
  {
    versionKey: false,
  }
);

doctorSchema.virtual('patient', {
    ref: Patient,
    localField: '_id',
    foreignField: 'doctor'
})

doctorSchema.methods.toJSON = function () {
  const doctor = this;
  const doctorObject = doctor.toObject();
  delete doctorObject.password;
  delete doctorObject.tokens;
  return doctorObject;
};

doctorSchema.statics.findByCredentials = async (email, password) => {
  const doctor = await Doctor.findOne({ email });

  if (!doctor) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, doctor.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return doctor;
};

doctorSchema.methods.generateAuthToken = async function () {
    const doctor = this
    const token = jwt.sign({ _id: doctor._id.toString() }, 'thisismynewtoken')

    doctor.tokens = doctor.tokens.concat({ token })
    await doctor.save()

    return token
}

doctorSchema.pre("save", async function (next) {
  const doctor = this;

  if (doctor.isModified("password")) {
    doctor.password = await bcrypt.hash(doctor.password, 8);
  }

  next();
});

const Doctor = mongoose.model("doctor", doctorSchema);

module.exports = Doctor;
