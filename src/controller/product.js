const pool = require('../db');
const queries = require('./../queries');

//products table
const getProducts = (req, res) => {
    pool.query(queries.getProducts, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getProductById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addProduct = (req, res) => {
    const {name, description,price,quantity} = req.body;

     //check if name exists
     pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send('name already exists')
            console.log('exists')
            throw error;
        } else {
        pool.query(queries.addProduct, [name, description, price, quantity], (error, results) => {
            if (error) throw error;
            res.status(201).send("product created successflly")
            console.log('created')
        })}
    })

}

const updateProductName = (req,res) => {
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(queries.getProductById, [id], (error, results) => {
        const noProduct = !results.rows.length;
        if ( noProduct) {
            res.send('product does not exists')
        } else {
            pool.query(queries.updateProductName, [name, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("product updated");
            })
        }
    })
}

const removeProduct = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getProductById, [id], (error, results) => {
        const noStudent = !results.rows.length;
        if (noStudent) {
            res.send("product does not exist");
        } else {
        pool.query(queries.removeProduct, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('product deleted');
        })}
    })
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProductName,
    removeProduct,
}