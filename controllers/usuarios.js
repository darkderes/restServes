const { response,request } = require('express');

const usuarioGet = (req = request,res = response) => {

    const { q,nombre = 'No name', apikey,page,limit } = req.query;
        res.json({
            msg : 'get API - controlador',
            q,
            nombre,
            apikey,
            page,
            limit     
      });
}
const usuarioPost = (req,res = response) => {

    res.json({
        msg : 'post API - controlador' 
  });
}
const usuarioPut = (req,res = response) => {

    const { id } = req.params;
    res.json({
        msg : 'put API - controlador',
        id 
  });
}
const usuarioPatch = (req,res = response) => {

    const body = req.body;
    res.json({
        msg : 'patch API - controlador',body
  
  });
}
const usuarioDelete = (req,res = response) => {

    res.json({
        msg : 'delete API - controlador'
  
  });
}
module.exports = {
    usuarioGet,usuarioPost,usuarioPut,usuarioPatch,usuarioDelete
}