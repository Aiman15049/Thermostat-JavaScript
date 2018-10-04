
'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('can be reset to the default temperature', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases the temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases temperature with down()', function () {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has a maximum temperature of 32 degrees', function() {
    for (var i = 0; i < 12; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it('has a power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can turn off PSM', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can turn PSM back on', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('current energy usage', function() {
    describe('when temp is below 18', function() {
      it('is described as low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.showEnergyUsage()).toEqual("low-usage");
      })
    })

    describe('when its any other temp', function() {
      it('is described as medium-usage', function() {
        expect(thermostat.showEnergyUsage()).toEqual("medium-usage");
      })
    })


    describe('when temp is over 25', function() {
      it('is described as high-usage', function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.showEnergyUsage()).toEqual("high-usage");
      })
    })

    describe('when its any other temp', function() {
    it('is described as medium-usage', function() {
      expect(thermostat.showEnergyUsage()).toEqual("medium-usage");
    })
  })

  describe('when power saving mode is on', function() {
    it('has a maximum of 25 degrees in PSM', function() {
        for (var i = 0; i < 5; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
      });
    });
  });
});
