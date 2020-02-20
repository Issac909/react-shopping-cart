import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};

	useEffect(() => {

	})

	const removeItem = itemId => {
		setCart(cart.filter(item => item.id !== itemId))
	}

	const clearCart = () => {
		setCart([]);
	}

	return (
		<div className="App">
	

			{/* Routes */}
			<ProductContext.Provider value = {{products, addItem}}>
			<Route
				exact path="/"
				component = {Products}
			/>
			</ProductContext.Provider>

			<CartContext.Provider value = {{cart, setCart, removeItem, clearCart}}>		
			<Navigation />
			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</CartContext.Provider>
		</div>
	);
}

export default App;
