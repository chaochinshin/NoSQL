var db = require("../models/Workouts.js");
var app = require('express').Router();
var express = require('express');
app.use(express.static("../public"));

  app.get("/api/workouts", function(req, res, next) {
    db.find({}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
  /*app.get("/exercise", function(req, res, next) {
    db.find({}).then(function(dbWorkouts) {
      res.sendFile("../public/exercise.html", {root: __dirname});
    });
  });
  */

  app.put("/api/workouts/:id", function(req, res, next) {
    db.updateOne({ _id: req.params.id }, {$push:{exercises: req.body}}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
  app.post("/api/workouts/", function(req, res, next) {
    db.create ({day: Date.now()}).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });
  app.get("/api/workouts/range", (req, res, next) => {
    db.Workouts.find({}).limit(7)
    .then(dbWorkouts => {
      console.log(dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = app