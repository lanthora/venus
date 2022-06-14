import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Overview from './pages/Overview';
import Process from './pages/Process';
import File from './pages/File';
import Net from './pages/Net';
import Extension from './pages/Extension';
import Login from './pages/Login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='overview' element={<Overview />} />
				<Route path='process' element={<Process />} />
				<Route path='file' element={<File />} />
				<Route path='net' element={<Net />} />
				<Route path='extension' element={<Extension />} />
				<Route path='*' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
