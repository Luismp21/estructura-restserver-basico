const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
  const {q, nombre = 'no name', apikey} = req.query;

  res.json({
    msg: "get API - controller",
    q,
    nombre,
    apikey
  });
};

const usuariosPut = (req = request, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "Put API - controller",
    id,
  });
};

const usuariosPost = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "Post API - controller",
    nombre,
    edad,
  });
};

const usuariosDelete = (req = request, res = response) => {
  res.json({
    msg: "Delete API - controller",
  });
};

const usuariosPatch = (req = request, res = response) => {
  res.json({
    msg: "Patch API - controller",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
