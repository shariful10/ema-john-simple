import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./Layout/Home";
import Orders from "./components/Orders/Orders";
import Inventory from "./Inventory/Inventory";
import Login from "./Login/Login";
import CartProductsLoader from "./loaders/cartProductsLoader";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/",
				element: <Shop />,
			},
			{
				path: "/orders",
				element: <Orders />,
				loader: CartProductsLoader
			},
			{
				path: "inventory",
				element: <Inventory />,
			},
			{
				path: "login",
				element: <Login />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
