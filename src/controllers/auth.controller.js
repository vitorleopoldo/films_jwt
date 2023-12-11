const User = require("../models/users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async function(req, res) {
    const userFind = await User.findOne({
        email: req.body.email
    });
    
    if(!userFind) {
        return res.status(401).json({message: 'Falha ao autenticar, email ou senha inválidos.'});
    }

    const isEqual = bcrypt.compareSync(req.body.password, userFind.password)
    if(!isEqual) {
        return res.status(401).json({message: 'Falha ao autenticar, email ou senha inválidos.'});
    }

    return res.json({
        token: jwt.sign({email: userFind.email, name: userFind.name, _id: userFind._id}, '0cc175b9c0f1b6a831c399e269772661'), 
    })
}

const signUp = async function(req, res) {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
    });

    newUser.password = await bcrypt.hashSync(req.body.password, 10);

    newUser.save();

    return res.json({message: 'Usuário cadastrado com sucesso!!'});

}

module.exports = { login, signUp }