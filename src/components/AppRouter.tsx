/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout';
import Index from './content/Index';
import { Utils } from '../utils';
import AdminList from './content/AdminList';
import Error404 from './error_page/Error404';

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={Utils.BaseUrl()} element={<AppLayout/>}>
					<Route index element={<Index />}/>
					<Route path={Utils.BaseUrl('admin-list')} element={<AdminList />}/>

					<Route path='*' element={<Error404 />}/>
				</Route>
			</Routes>
		</Router>
	); 	
}

export default AppRouter;
