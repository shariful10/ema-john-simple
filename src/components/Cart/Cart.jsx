import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
	let total = 0;
	let quantity = 0;
	let totalShipping = 0;
	for (const product of cart) {
		if (product.quantity === 0) {
			product.quantity = 1;
		}

		total = total + product.price * product.quantity;
		quantity = quantity + product.quantity;
		totalShipping = totalShipping + product.shipping;
	}
	const tax = (total * 7) / 100;
	const grandTotal = total + totalShipping + tax;

	return (
		<div className="cart">
			<h4>Order Sammary</h4>
			<p>Selected Items: {quantity}</p>
			<p>Total Price: ${total}</p>
			<p>Total Shipping Charge: ${totalShipping}</p>
			<p>Tax: ${tax.toFixed(2)}</p>
			<h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
		</div>
	);
};

export default Cart;
