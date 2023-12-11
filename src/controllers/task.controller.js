const Task = require("../models/tasks");

const create = async function (req, res) {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
    done: false,
  });

  await newTask.save();

  return res.json(newTask);
};

const update = async function (req, res) {
  const id = req.params.id;

  const findUpdateTask = await Task.findByIdAndUpdate(
    id,
    {
      done: req.body.done == "true",
    },
    {
      new: true,
    }
  );

  res.send(findUpdateTask);
};

const remove = async function (req, res) {
  const id = req.params.id;
  await Task.findByIdAndDelete(id);
  return res.send({ message: "deleted" });
};

const list = async function (req, res) {
  const tasks = await Task.find();
  return res.send(tasks);
};

module.exports = {
  create,
  update,
  remove,
  list,
};
