import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TodoList from "./pages/TodoList";


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/todolist" element={<TodoList />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
