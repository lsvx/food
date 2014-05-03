/* jshint node: true */
/* global window */
'use strict';

/** Setup libraries for Backbone app. */
var _ = require('lodash'),
    $ = require('jquery'),
    Backbone = require('backbone');

/** Configure libraries. */
Backbone.$ = $;

/** Configure application with app.js */
var app = require('./app')(Backbone);

/** Initialize routing. */
var Router = require('./router')(Backbone),
    router = new Router();
Backbone.history.start({pushState: true});
