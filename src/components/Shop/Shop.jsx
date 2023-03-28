import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
		)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	useEffect(() => {
		const storedCart = getShoppingCart();
		const savedCart = [];

		//Step 1: Get id from the addedProduct
		for (const id in storedCart) {
			//Step 2: Get product from products state by using id
			const addedProduct = products.find((product) => product.id === id);

			if (addedProduct) {
				// Step 3: Get quantity of the product
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				//Step 4: Add product to savedCart
				savedCart.push(addedProduct);
			}
		}
		// Step 5: Set the cart
		setCart(savedCart);
	}, [products]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		console.log(cart);
		setCart(newCart);
		addToDb(product.id);
	};

	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
