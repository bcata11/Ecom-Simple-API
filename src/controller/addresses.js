const pool = require('../db');
const queries = require('./../queries');

//addresses table
const getAddress = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAddress, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addAddress = (req, res) => {
    const {user_id, street, city, state, country, postal_code} = req.body;

     //check if name exists
        pool.query(queries.addProduct, [user_id, street, city, state, country, postal_code], (error, results) => {
            if (error) throw error;
            res.status(201).send("address created successflly")
            console.log('created')
        })
}

const updateAddress = (req,res) => {
    const id = parseInt(req.params.id);
    const {street} = req.body;

    pool.query(queries.getAddressByID, [id], (error, results) => {
        const noAddress = !results.rows.length;
        if ( noAddress) {
            res.send('address does not exists')
        } else {
            pool.query(queries.updateAddress, [street, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("address updated");
            })
        }
    })
}

const removeAddress = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeAddress, [id], (error, results) => {
        const noAddress = !results.rows.length;
        if (noAddress) {
            res.send("address does not exist");
        } else {
        pool.query(queries.removeAddress, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('address deleted');
        })}
    })
}

module.exports = {
    getAddress,
    addAddress,
    updateAddress,
    removeAddress,
}