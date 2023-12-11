const Film = require("../models/film");

const create = async function (req, res) {
  const dataFilm = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });
  await dataFilm.save();
  res.send(dataFilm);
};

const update = async function (req, res) {
  const upfilm = await Film.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    },
    {
      new: true,
    }
  );

  return res.send(upfilm);
};

const remove = async function (req, res) {
    const id = req.params.id;
    await Film.findByIdAndDelete(id);
    return res.send({ message: "deleted" });
};

const list = async function (req, res) {
    const films = await Task.find();
    return res.send(films);
};

module.exports = {
    create,
    update,
    remove,
    list,
  };
