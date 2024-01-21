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

--- @class Locale
Locale = {}
Locale.__index = Locale
Locale.Phrases = {}

local function translateTable(phrase, subs)

end

--- Constructor function for a new Locale class instance
--- @param opts table<string, any> - Constructor opts param
--- @return Locale
function Locale.New(_, opts)
  local self = setmetatable({}, Locale)

  self:Extract(opts.Phrases or {})
  return self
end

function Locale:Extract(opts, prefix)
  for key, phrase in pairs(opts) do
    local prefixKey = prefix and ('%s.%s'):format(prefix, key) or key
    if type(phrase) == 'table' then
      self:Extract(phrase, prefixKey)
    else
      self.Phrases[prefixKey] = phrase
    end
  end
end

function Locale:T(key)
  return self.Phrases[key] or ('^3Warning: Missing phrase for key: "%s"'):format(key)
end
