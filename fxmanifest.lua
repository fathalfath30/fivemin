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
fx_version "cerulean"
lua54 'yes'
games { "gta5" }

description "f30fm_admin"
author "fathalfath30 <fathalfath30@gmail.com>"
version '1.0.0'
repository 'git@github.com:f30studio/f30fm_admin.git'

shared_scripts {
  'shared/locale/locale.lua',
  'shared/locale/en.lua',
  'shared/locale/*.lua',
  'shared/config.lua'
}

client_script {
  'client/qb-core.lua',
  'client/ui.lua',

  'client/_main.lua'
}
server_script "server/**/*.lua"

files { 'ui/**/*' }
ui_page 'ui/index.html'
