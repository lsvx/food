/* jshint node: true */
'use strict';

module.exports = function(Backbone) {
    /** Define the view for the index. */
    var IndexView = Backbone.View.extend({
        el: 'main',

        template: require('../templates/index.handlebars'),

        events: {
            'submit .signin': 'submit'
        },

        submit: function(e) {
            if (e.preventDefault) e.preventDefault();

            Backbone.sync('post', Backbone.user, {
                data: {
                    identifier:'ra',
                    password:'ra',
                    provider:'local'
                },
                success: function(a) {console.log(a);}
            });

            return false;
        },
        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });

    return IndexView;
};
