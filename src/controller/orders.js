const pool = require('../db');
const queries = require('./../queries');

//orders
const getOrder = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getOrder, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


const addOrder = (req, res) => {
    const {user_id, total_amount, cart_id} = req.body;

     //check if name exists
        pool.query(queries.addOrder, [user_id, total_amount, cart_id], (error, results) => {
            if (error) throw error;
            res.status(201).send("order added successflly")
            console.log('added')
        })
}

const removeOrder = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getOrder, [id], (error, results) => {
        const noOrder = !results.rows.length;
        if (noOrder) {
            res.send("order item does not exist");
        } else {
        pool.query(queries.removeOrder, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('order deleted');
        })}
    })
}


module.exports = {
    getOrder,
    addOrder,
    removeOrder
}