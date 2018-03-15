#!/usr/bin/env node
'use strict'
var config = require('./config/global.js');

var brace = {};

brace.config = config;

module.exports = brace;