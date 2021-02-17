const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

/**
 * @route POST api/users/register
 * @desc Register the User 
 */
router.post('/register', (req, res) => {

    let { name, email, password, confirm_password } = req.body;

    //Verificar se os campos estão preenchido 
    if(!name || !email || !password || !confirm_password){
        return res.status(400).json({
            msg: "Todos os campos são obrigatório."
        })
    }
    //Verificar password se esta igual ao confirm_password
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "A senha esta errada."
        });
    }
    //Verificar se possuir no minimo 6 caracterios
    if (password.length < 6) {
        return res.status(400).json({
            msg: "A senha deve ter pelo menos 6 caracteres."
        })
    }
    
    // Verifica se o nome de usuário exclusivo
    User.findOne({
        name: name
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "O nome de usuário já foi usado."
            });
        }
    })
    // Verifica se o Email exclusivo
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "O email já está registrado."
            });
        }
    });
    //Verifica se os dados são válidos e novos usuário pode ser registrado
    let newUser = new User({
        name,
        password,
        email
    });
    // Hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "O usuário está registrado agora."
                });
            });
        });
    });
});

/**
 * @route POST api/users/login
 * @desc Login in the User
 */
router.post('/login', (req, res) => {
    User.findOne({
        email:req.body.email
       
    }).then(user => {
        //Verificando se User esta cadastrado
        if (!user) {
            return res.status(404).json({
                msg: "Esse usuário não está registrado.",
                success: false
            });
        }else{
            //Verificando Password se esta correto e enviar o token JSON para esse usuário
            bcrypt.compare(req.body.password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    }
                    //Gera um Token 
                    jwt.sign(payload, key, {
                        expiresIn: 604800
                    }, (err, token) => {
                        res.status(200).json({
                            success: true,
                            token: `Bearer ${token}`,
                             user: user,
                            msg: "Agora você está logado."
                        });
                    })
                } else {
                    //Verifica se a Senha esta correta
                    return res.status(404).json({
                        msg: "Senha incorreta.",
                        success: false
                    });
                }
            })
        }
       
    });
});


module.exports = router;