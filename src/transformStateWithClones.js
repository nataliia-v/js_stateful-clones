'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let copy = {
    ...state,
  };

  const result = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      copy = { ...copy, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      for (const el of action.keysToRemove) {
        delete copy[el];
      }
    }

    if (action.type === 'clear') {
      copy = {};
    }

    result.push({ ...copy });
  }

  return result;
}

module.exports = transformStateWithClones;
