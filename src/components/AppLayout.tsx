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
import { Utils } from '../utils'
import { Outlet, Link } from "react-router-dom";
import '../style/components/AppLayout.scss';
import { useTranslation } from 'react-i18next';

const AppLayout: React.FC = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className='body-sidebar'>
                <li>
                    <Link to={Utils.BaseUrl("dashboard")}>
                        {t('main_ui.sidebar.dashboard')}
                    </Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("player-management")}>
                        {t('main_ui.sidebar.player_management')}
                    </Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("server-marnagement")}>
                        {t('main_ui.sidebar.server_management')}
                    </Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("vehicle-spawner")}>
                        {t('main_ui.sidebar.vehicle_spawner')}
                    </Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("peds")}>
                        {t('main_ui.sidebar.peds')}
                    </Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("weapon")}>
                        {t('main_ui.sidebar.weapon')}
                    </Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("devs-tools")}>
                        {t('main_ui.sidebar.devs_tools')}
                    </Link>
                </li>
                <li>
                    <Link to={Utils.BaseUrl("about")}>
                        {t('main_ui.sidebar.about')}
                    </Link>
                </li>
            </div>
            <div className='body-content'>
                <Outlet />
            </div>
        </>
    );
}

export default AppLayout;
