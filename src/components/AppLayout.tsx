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
import {Utils} from '../utils'
import { Outlet, Link } from "react-router-dom";


import '../style/components/AppLayout.scss';

const AppLayout: React.FC = () => {
  	return (
		<>
            <div className='body-sidebar'>
                <li>
                    <Link to={Utils.BaseUrl("dashboard")}>Dashboard</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("player-management")}>Player Mangement</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("server-marnagement")}>Server Management</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("vehicle-spawner")}>Vehicle Spawner</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("peds")}>Peds</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("weapon")}>Weapon</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("devs-tools")}>Devs Tools</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("about")}>About</Link>
                </li>
            </div>
            <div className='body-content'>
                <Outlet />
            </div>
        </>
  	);
}

export default AppLayout;
