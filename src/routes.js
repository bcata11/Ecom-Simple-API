const { Router } = require('express');

const controller = require('./controller')
const controllerOrders = require('./controller/orders')
const controllerCarts = require('./controller/carts')
const controllerAdresses = require('./controller/addresses')
const controllerUser = require('./controller/user')
const controllerProduct = require('./controller/product')


const router = Router();

//product
router.get('/', controllerProduct.getProducts);
router.get('/:id', controllerProduct.getProductById);
router.post('/', controllerProduct.addProduct);
router.put('/:id', controllerProduct.updateProductName);
router.delete('/:id', controllerProduct.removeProduct);
//user
router.get('/users/:id', controllerUser.getUser);
router.post('/users/', controllerUser.addUser);
router.put('/users/:id', controllerUser.updateProductName);
router.put('/users/pass/:id', controllerUser.updateProductName);
router.delete('/users/:id', controllerUser.removeUser);
//addresses
router.get('/users/address/:id', controllerAdresses.getAddress);
router.post('/users/address', controllerAdresses.addAddress);
router.put('/users/address/:id', controllerAdresses.updateAddress);
router.delete('/users/address/:id', controllerAdresses.removeAddress);
//carts
router.get('/users/cart/:id', controllerCarts.getCart);
router.get('/users/cart/item/:id', controllerCarts.getCartItem);
router.post('/users/cart/', controllerCarts.addCart);
router.post('/users/cart/item/', controllerCarts.addCartItem);
router.put('/users/cart/item/:id', controllerCarts.updateCartItem);
router.delete('/users/cart/item/:id', controllerCarts.removeCartItem);
//orders
router.get('/users/orders/:id', controllerOrders.getOrder);
router.post('/users/orders/', controllerOrders.addOrder);
router.delete('/users/orders/:id', controllerOrders.removeOrder);













module.exports = router;