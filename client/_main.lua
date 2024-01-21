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

FiveMin.FiveMin = FiveMin.FiveMin or {}
FiveMin.FiveMin.Config = FiveMin.FiveMin.Config or {}

FiveMin.QBCore = FiveMin.QBCore or {};

RegisterCommand("laper", function()
  FiveMin.QBCore.ResetHealthArmor()
  FiveMin.QBCore.ResetHungerThirst()
end, false)
