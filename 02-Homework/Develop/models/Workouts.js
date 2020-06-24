const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  totalDuration:{
    type: Number
  },
  totalWeight:{
    type: Number
  },
  totalSets:{
    type: Number
  },
  totalReps:{
    type: Number
  },
  totalDistance:{
    type: Number
  },
      exercises: [
      {
        type: { type: String },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number }
      }
    ]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
