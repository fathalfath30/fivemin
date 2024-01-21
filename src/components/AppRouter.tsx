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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from './AppLayout';
import Index from './content/Index';
import { Utils } from '../utils';
import AdminList from './content/AdminList';
import Error404 from './error_page/Error404';
import Dashboard from "./content/Dashboard";
import PlayerManagement from "./content/PlayerManagement";
import ServerManagement from "./content/ServerManagement";
import VehicleSpanwer from "./content/VehicleSpawner";
import Peds from "./content/Peds copy";
import Weapon from "./content/Weapon";
import DevTools from "./content/DevsTools";
import About from "./content/About";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path={Utils.BaseUrl()} element={<AppLayout/>}>
					<Route index element={<Dashboard />}/>
					<Route path={Utils.BaseUrl('dashboard')} element={<Dashboard />}/>
					<Route path={Utils.BaseUrl('player-management')} element={<PlayerManagement />}/>
					<Route path={Utils.BaseUrl('server-marnagement')} element={<ServerManagement />}/>
					<Route path={Utils.BaseUrl('vehicle-spawner')} element={<VehicleSpanwer />}/>
					<Route path={Utils.BaseUrl('peds')} element={<Peds />}/>
					<Route path={Utils.BaseUrl('weapon')} element={<Weapon/>}/>
					<Route path={Utils.BaseUrl('devs-tools')} element={<DevTools />}/>
					<Route path={Utils.BaseUrl('about')} element={<About />}/>
					<Route path='*' element={<Error404 />}/>
				</Route>
			</Routes>
		</Router>
	); 	
}

export default AppRouter;
