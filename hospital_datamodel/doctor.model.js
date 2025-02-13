import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema(
    {
      name :{
        type : String,
        required: true
      },
      sallary:{
        type : Number,
        required: true
      },
      qualification:{
        type : String,
        required: true
      },
      experienceInYears:{
        type : Number,
        default: 0,
      },
      workInHospitals:
      [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        },
      ],
    },{timestamps:true});

export const Doctor = mongoose.model("Doctor",doctorSchema);