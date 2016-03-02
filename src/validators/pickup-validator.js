"use strict";

var Joi = require('joi'),
        schemas = require('../schemas');

function PickupValidator() {}

PickupValidator.prototype = (function () {
    var schema = new schemas.PickupSchema().schema;

    return {
        pickup: {
            payload: {
                requester: schema.requester.required(),
                address: schema.address,
                timeInterval: schema.timeInterval.required(),
                instructions: schema.instructions.optional(),
                items: schema.items.required()
            },
            headers: schema.authorization.required()
        }
    };
})();

module.exports = new PickupValidator();
