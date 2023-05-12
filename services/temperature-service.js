import { UNITS } from "../constants";

export const getOppositeUnit = (unit) => {
  return unit == UNITS.celsius ? UNITS.farenheit : UNITS.celsius;
};

export const convertTemperatureTo = (unit, value) => {
  if (unit == UNITS.celsius) {
    return (value - 32) / 1.8;
  } else {
    return value * 1.8 + 32;
  }
};

export const isIceTemperature = (value, unit) => {
  if (unit == UNITS.celsius) {
    return value <= 0;
  } else {
    return value <= 32;
  }
};
