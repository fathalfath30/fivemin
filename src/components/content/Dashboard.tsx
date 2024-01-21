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
import '../../style/components/content/Dashboard.scss';

const Dashboard: React.FC = () => {
	return (
		<div className='container main-container text-center'>
			<div className="row lg-12">
				<div className="col">
					Total Player
				</div>
				<div className="col">
					Total Admin
				</div>
				<div className="col">
					Total Banned Player
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
