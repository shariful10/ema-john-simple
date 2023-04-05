import React from "react";
import "./Header.css";
import logo from "../../../src/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<img src={logo} alt="" />
			<nav>
				<Link to="/">Shop</Link>
				<Link to="/orders">Orders</Link>
				<Link to="/inventory">Inventory</Link>
				<Link to="/login">Login</Link>
			</nav>
		</div>
	);
};

export default Header;
