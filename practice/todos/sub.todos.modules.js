import mongoose from "mongoose"

const SubTodoSchema = new mongoose.Schema(
  {

    content:{
      type: String,
      required : true
    },
    complete : {
      type : Boolean,
      default : false
    },
    cretaedBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }

  },{timestrapms: true})

export const SubTodo = mongoose.model("SubTodo",SubTodoSchema)