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
export const Utils = {
	// RequestNUI
	// this async function will used to send request using json format
    RequestNUI: async (endpoint:string, data?:any)=>{
        const resourceName = (window as any).GetParentResourceName ? (window as any).GetParentResourceName() : "nui-frame-app";
		return await fetch(`https://${resourceName}/${endpoint}`, {
			method: "post",
			headers: {
			  "Content-Type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(data),
		});
    },
	BaseUrl: (path ?:string) => {
		if (path === null || path === undefined || path === '') {
			return window.location.pathname;
		}

		return window.location.pathname + "/" + path.replace(/^\/+/, '');
	}
}