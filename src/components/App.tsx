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
import $ from 'jquery';

import '../style/components/app.scss';
import AppRouter from './AppRouter';
import { useTranslation } from 'react-i18next';
const App: React.FC = () => {
	// create close container
	const { t, i18n } = useTranslation();
	const toggleContainer = async () => {
		let res = await Utils.RequestNUI('toggle-nui-callback');
		if (!res.ok) {
			console.log(`error while fetching data with status: ${res.status}`);
			return;
		}

		console.log(await res.json())
	}

	// add new event listener to show or hide this container
	window.addEventListener('message', (evt) => {
		let data = evt.data;
		console.log(`new "message" events:`, JSON.stringify(data));
		let container = $("#app-container");
		if (data.action === 'hide-display-nui') {
			if (data.data.displayNui) {
				container.show();
				container.css('display', 'flex');
			} else {
				container.hide();
				container.css('display', 'none');
			}
		}
	});

	return (
		<div className='app-container' id="app-container">
			<div className='background'></div>
			<div className='content'>
				<div className='content-header'>
					<h3>FiveMin - FiveM Admin Menu</h3>
				</div>
				<div className='content-body'>
					<AppRouter />
				</div>
				<div className='content-footer'>
					<button className='btn btn-primary' onClick={toggleContainer}>{t('main_ui.close_button')}</button>
				</div>
			</div>
		</div>
	);
}

export default App;
