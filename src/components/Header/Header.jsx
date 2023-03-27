import React from "react";
import "./Header.css";
import logo from "../../../src/images/Logo.svg";

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
				<a herf="/shop">Shop</a>
				<a herf="/order">Order</a>
				<a herf="/inventory">Inventory</a>
				<a herf="/login">Login</a>
			</nav>
		</div>
	);
};

export default Header;
