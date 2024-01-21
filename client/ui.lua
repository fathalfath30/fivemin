--
--  ______    _   _           _  __      _   _     ____   ___
-- |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
-- | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
-- |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
-- | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
-- |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
--
-- Written by Fathalfath30.
-- Email : fathalfath30@gmail.com
-- Follow me on:
--  Github : https://github.com/fathalfath30
--  Gitlab : https://gitlab.com/Fathalfath30
--
--[[ set default variable ]]
FiveMin = FiveMin or {}
FiveMin.Config = FiveMin.Config or {}

FiveMin.QBCore = FiveMin.QBCore or {};
local display = false;

--- ToggleNUI
--- This function is use for show or hide the NUI it will set "display"  variable from "false" to "true" vice versa, 
--- and then SetNuiFocus as the "display" variable so you can use mouse and interact with the UI and lasting it will
--- SendNUIMessage this will trigger the window.addEventListener("message", (){})
function ToggleNUI()
    display = not display
    SetNuiFocus(display, display)

    local serverInfo = {}
    if display then
        serverInfo = {
            serverName = GetConvar('sv_hostname', 'n/a')
        }
    end

    SendNUIMessage({
        action = "hide-display-nui",
        data = {
            displayNui = display,
            menu = {
                {
                    title = "Admin Management",
                    url = "admin-list"
                }
            }
        }
    })
end

--- registering command using app_command from the fxmanifest.lua
RegisterCommand(FiveMin.Config.Command, function ()
    ToggleNUI()
end, false)

--- registering the NUI callback, it will executed when your UI perform http request in this case
--- it will create endpoint "/toggle-nui-callback"
--- @param _ any
--- @param cb function
RegisterNUICallback('toggle-nui-callback', function (_, cb)
    ToggleNUI()
end)

--- create new thread to register hotkey, the hotkey it self defined in fxmanifest.lua
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if hotkey ~= "" then
            if IsControlJustPressed(1, tonumber(FiveMin.Config.Hotkey)) then
                ToggleNUI()
            end
        end
    end
end)

--- create new thread to disable some controll while the NUI content are showing
Citizen.CreateThread(function()
    while display do
        Citizen.Wait(0)
        
        DisableControlAction(0, 1, display) -- LookLeftRight
        DisableControlAction(0, 2, display) -- LookUpDown
        DisableControlAction(0,24, display) -- Attack
        DisableControlAction(0, 18, display) -- Enter
        DisableControlAction(0, 106, display) -- VehicleMouseControlOverride
        DisableControlAction(0, 142, display) -- MeleeAttackAlternate
        DisableControlAction(0, 322, display) -- ESC
    end
end)


-- Citizen.CreateThread(function ()
--     if not display then
--       ToggleNUI()
--     end

--     Citizen.Wait(500)
-- end)