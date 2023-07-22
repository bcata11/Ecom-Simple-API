const pool = require('../db');
const queries = require('./../queries');

//users table
const getUser = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUser, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    const {username, email, name, password} = req.body;

     //check if name exists
     pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('email already exists')
            console.log('exists')
            throw error;
        } else {
        pool.query(queries.addProduct, [username, email, name, password], (error, results) => {
            if (error) throw error;
            res.status(201).send("user created successflly")
            console.log('created')
        })}
    })

}

const updateUsername = (req,res) => {
    const id = parseInt(req.params.id);
    const {username} = req.body;

    pool.query(queries.getUser, [id], (error, results) => {
        const noUser = !results.rows.length;
        if ( noUser) {
            res.send('user does not exists')
        } else {
            pool.query(queries.updateUsername, [username, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("user updated");
            })
        }
    })
}

const updateUserPass = (req,res) => {
    const id = parseInt(req.params.id);
    const {password} = req.body;

    pool.query(queries.getUser, [id], (error, results) => {
        const noUser = !results.rows.length;
        if ( noUser) {
            res.send('user does not exists')
        } else {
            pool.query(queries.updateUserPass, [password, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("user updated");
            })
        }
    })
}

const removeUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUser, [id], (error, results) => {
        const noUser = !results.rows.length;
        if (noUser) {
            res.send("user does not exist");
        } else {
        pool.query(queries.removeUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('user deleted');
        })}
    })
}

module.exports = {
    getUser,
    addUser,
    updateUsername,
    updateUserPass,
    removeUser,
}