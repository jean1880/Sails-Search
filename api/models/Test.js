/**
 * Test.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    "Description": {
      type: 'string'
    },
    'Data': {
      model: 'data'
    },
    'IsAdmin': {
      type: 'boolean'
    },
    'PageViews': {
      type: 'integer'
    }
  }
};
