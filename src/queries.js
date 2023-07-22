const getProducts = 'select * from products';
const getProductById = 'select * from products where id = $1';
const addProduct = 'insert into products (name, description,price,quantity) values ( $1, $2, $3, $4)';
const checkNameExists = 'select * from products where name = $1';
const updateProductName = 'UPDATE products SET name = $1 WHERE id = $2';
const removeProduct = 'delete from products where id = $1';
const getUser = 'select * from users where id = $1';
const addUser = 'insert into users (username, email, name, password) values ( $1, $2, $3, $4)';
const checkEmailExists = 'select * from products where email = $1';
const updateUsername = 'UPDATE users SET username = $1 WHERE id = $2';
const updateUserPass = 'UPDATE users SET password = $1 WHERE email = $2';
const removeUser = 'delete from users where id = $1';
const getAddress = 'select * from addresses where user_id = $1';
const getAddressByID = 'select * from addresses where id = $1';
const addAddress = 'insert into addresses (user_id, street, city, state, country, postal_code) values ( $1, $2, $3, $4, $5, $6)';
const updateAddress = 'UPDATE addresses SET street = $1 WHERE id = $2';
const removeAddress = 'delete from addresses where id = $1';
const getCart = 'select * from carts where id = $1';
const addCart = 'insert into carts (user_id) values ( $1)';
const removeCart = 'delete from carts where id = $1';
const getCartItem = 'select * from cart_items where id = $1';
const addCartItem = 'insert into cart_items (cart_id, product_id, quantity) values ($1, $2, $3)';
const updateCartItem = 'UPDATE cart_items SET quantity = $1 WHERE id = $2';
const removeCartItem = 'delete from cart_items where cart_id = $1 and product_id =$2';
const getOrder = 'select * from orders where id = $1';
const addOrder = 'insert into orders (user_id, total_amount, cart_id) values ($1, $2, $3)';
const removeOrder = 'delete from orders where id = $1';


module.exports = {
    getProducts,
    getProductById,
    addProduct,
    checkNameExists,
    updateProductName,
    removeProduct,
    getUser,
    addUser,
    checkEmailExists,
    updateUsername,
    updateUserPass,
    removeUser,
    getAddress,
    addAddress,
    updateAddress,
    getAddressByID,
    removeAddress,
    getCart,
    addCart,
    addCartItem,
    removeCart,
    updateCartItem,
    removeCartItem,
    getCartItem,
    getOrder,
    addOrder,
    removeOrder
}