'use strict';

const pool = require('./database');

exports.hello = async (req, h) => {
    return 'Hello';
}

