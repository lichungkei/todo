const express = require('express');
const router = express.Router();
const todoFunctions = require('../todo');

router.post('/add', function(req, res, next) {
let success = todoFunctions.addTask(req.body.task);
res.send(success);
});

router.post('/remove', function(req, res, next) {
let success = todoFunctions.removeTask(req.body.task);
res.send(success);
});

router.get('/list', function(req, res, next) {
let taskList = todoFunctions.listTasks();
res.send(taskList);
});

module.exports = router;