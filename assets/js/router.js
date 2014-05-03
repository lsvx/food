/* jshint node: true */
'use strict';

module.exports = function(Backbone) {
    /** Import views. */
    var IndexView = require('./views/index')(Backbone);

    /** Define the application's router. */
    var Router = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            (new IndexView()).render();
        }
    });

    return Router;
};
