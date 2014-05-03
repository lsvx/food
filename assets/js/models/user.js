/* jshint node: true */
'use strict';

module.exports = function(Backbone) {

    /** Define the user model. */
    var User = Backbone.Model.extend({
        url: '/auth/local'
    });

    return User;
};
