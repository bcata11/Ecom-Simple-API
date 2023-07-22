const pool = require('../db');
const queries = require('./../queries');

//carts
const getCart = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCart, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addCart = (req, res) => {
    const {user_id} = req.body;

     //check if name exists
        pool.query(queries.addCart, [user_id], (error, results) => {
            if (error) throw error;
            res.status(201).send("cart created successflly")
            console.log('created')
        })
}

const removeCart = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getCart, [id], (error, results) => {
        const noCart = !results.rows.length;
        if (noCart) {
            res.send("cart does not exist");
        } else {
        pool.query(queries.removeCart, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('cart deleted');
        })}
    })
}

const getCartItem = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCartItem, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const addCartItem = (req, res) => {
    const {cart_id, product_id, quantity} = req.body;

     //check if name exists
        pool.query(queries.addCartItem, [cart_id, product_id, quantity], (error, results) => {
            if (error) throw error;
            res.status(201).send("item added successflly")
            console.log('added')
        })
}

const updateCartItem = (req,res) => {
    const id = parseInt(req.params.id);
    const {quantity} = req.body;

    pool.query(queries.getCart, [id], (error, results) => {
        const noCart = !results.rows.length;
        if ( noCart) {
            res.send('cart does not exists')
        } else {
            pool.query(queries.updateCartItem, [quantity, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("item updated");
            })
        }
    })
}

const removeCartItem = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getCartItem, [id], (error, results) => {
        const noCart = !results.rows.length;
        if (noCart) {
            res.send("cart item does not exist");
        } else {
        pool.query(queries.removeCartItem, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send('cart item deleted');
        })}
    })
}

module.exports = {
    getCart,
    addCart,
    addCartItem,
    removeCart,
    updateCartItem,
    getCartItem,
    removeCartItem,
}