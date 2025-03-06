const HQ_STREET = 42;
const FEET_PER_BLOCK = 264;
const MAX_TRAVEL_FEET = 2500;
const FREE_SAMPLE_DISTANCE = 1;

function distanceFromHqInBlocks(street) {
  return Math.abs(street - HQ_STREET);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * FEET_PER_BLOCK;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * FEET_PER_BLOCK;
}

function calculatesFarePrice(start, destination) {
  const distanceFeet = distanceTravelledInFeet(start, destination);
  console.log("distanceFeet: ", distanceFeet);

  if (distanceFeet <= FREE_SAMPLE_DISTANCE * FEET_PER_BLOCK) {
    return 0;
  }

  if (distanceFeet > MAX_TRAVEL_FEET) {
    return 'cannot travel that far';
  }

  if (distanceFeet > 2000) {
    return 25;
  }

  const chargeableFeet = distanceFeet - (FREE_SAMPLE_DISTANCE * FEET_PER_BLOCK);

  if (chargeableFeet <= 0) {
    return 0;
  }

  return chargeableFeet * 0.02;
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};