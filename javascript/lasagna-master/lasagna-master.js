/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer === 0) return 'Lasagna is done.';
  else if (timer === undefined) return 'You forgot to set the timer.';
  else return 'Not done, please wait.';
}

export function preparationTime(layers, time = 2) {
  return layers.length * time;
}

export function quantities(layers) {
  const QUANTITIES_OBJ = {
    noodles: 0,
    sauce: 0,
  };
  layers.forEach((layer) => {
    if (layer === 'noodles') QUANTITIES_OBJ.noodles += 50;
    if (layer === 'sauce') QUANTITIES_OBJ.sauce += 0.2;
  });
  return QUANTITIES_OBJ;
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipie, portions) {
  const TEMP = { ...recipie };
  for (let key in TEMP) {
    TEMP[key] *= portions / 2;
  }
  return TEMP;
}
