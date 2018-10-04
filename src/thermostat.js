'use strict';


function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.PSMMAXIMUM_TEMPERATURE = 25;
  this.MAXIMUM_TEMPERATURE = 32;
  this.MEDIUM_ENERGY_USAGE = 18;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode === true) {
    return this.temperature === this.PSMAXIMUM_TEMPERATURE;
  } else {
    return this.temperature === this.MAXIMUM_TEMPERATURE
  }
}
Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE
}

Thermostat.prototype.showEnergyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE) {
    return "low-usage";
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE && this.temperature <= 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
}
