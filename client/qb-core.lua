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
FiveMin = FiveMin or {}
FiveMin.QBCore = FiveMin.QBCore or {}
FiveMin.QBCore.IsReady = false

--- checking qb-core is exists or not
Citizen.CreateThread(function()
  while true do
    local resourceState = GetResourceState("qb-core")
    FiveMin.QBCore.IsReady = (resourceState == 'started')
    if resourceState == 'started' then
      print('QB-Core resource is loaded and started!')
      break
    elseif resourceState == 'missing' then
      print('QB-Core resource is missing!')
      break
    end
    -- Add a delay to avoid constant checking and reduce performance impact
    Citizen.Wait(1000)
  end
end)

FiveMin.QBCore.ResetHungerThirst = function()
  TriggerServerEvent('hospital:server:resetHungerThirst')
end

FiveMin.QBCore.ResetHealthArmor = function()
  local ped = GetPlayerPed(-1)

  SetEntityHealth(ped, ped)
  SetPedArmour(ped, 100)
  TriggerServerEvent('QBore:UpdatCePlayer')
end
