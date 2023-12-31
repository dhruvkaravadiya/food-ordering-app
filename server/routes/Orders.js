const express = require('express');
const router = express.Router();
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const isLoggedIn = require("../middlewares/isLoggedIn");
const orderController = require("../controllers/orderController");
//place order
router.post(
      "/placeorder/:id",
      isLoggedIn,
      verifyRole("Customer"),
      asyncErrorHandler(orderController.createOrder)
);
//update order status
router.put(
      "/update/:id",
      isLoggedIn,
      verifyRole("Restaurant"),
      asyncErrorHandler(orderController.updateOrderStatus)
);
// # pick up order 
router.put(
      '/pick/:id',
      isLoggedIn, 
      verifyRole("DeliveryMan"), 
      asyncErrorHandler(orderController.pickOrder)
);
// # complete Order 
router.put(
      '/verify/:id', 
      isLoggedIn, 
      verifyRole("DeliveryMan"), 
      asyncErrorHandler(orderController.completeOrder)
);
// # get past orders
router.get(
      '/past', 
      isLoggedIn, 
      verifyRole(["DeliveryMan", "Restaurant","Customer"]), 
      asyncErrorHandler(orderController.getPastOrders)
);
// # get current orders
router.get(
      '/current', 
      isLoggedIn, 
      verifyRole(["DeliveryMan","Restaurant","Customer"]), 
      asyncErrorHandler(orderController.getCurrentOrders)
);
//get prepared orders 
router.get(
      '/prepared', 
      isLoggedIn,
      verifyRole('DeliveryMan'),
      asyncErrorHandler(orderController.getPreparedOrders)
);
// cancel order
router.put(
      '/cancel/:id',
      isLoggedIn,
      verifyRole('Customer'),
      asyncErrorHandler(orderController.cancelOrder)
);

module.exports = router;