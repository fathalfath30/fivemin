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
import $ from 'jquery';
import { Outlet, Link } from "react-router-dom";


import '../style/components/AppLayout.scss';

const AppLayout: React.FC = () => {
  	return (
		<>
            <div className='body-sidebar'>
                <li>
                    <Link to={Utils.BaseUrl()}>Home</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("admin-list")}>Admin Management</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("admin-list")}>Player Mangement</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("admin-list")}>Server Management</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("admin-list")}>Vehicle Spawner</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("admin-list")}>Weapon Spanwer</Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("admin-list")}>About</Link>
                </li>
            </div>
            <div className='body-content'>
                <Outlet />
            </div>
        </>
  	);
}

export default AppLayout;
