var Compare = require('./compare'),
    Slider = require('./slider.js'),
    $ = require('jquery'),
    jayson = {
        pork: {
            name: "Pork",
            icon: "http://bestclipartblog.com/clipart-pics/pig-clip-art-2.jpg",
            price: 20,
            protein: 10,
            graphSRC: "http://www.mathgoodies.com/lessons/graphs/images/line_example5.jpg",
            carbon: "5"
        },
        chickpea: {
            name: "Chickpea",
            icon: "http://www.entertainmentearth.com/images/AUTOIMAGES/TN4451lg.jpg",
            price: 10,
            protein: 20,
            graphSRC: "http://www.mathgoodies.com/lessons/graphs/images/line_example5.jpg",
            carbon: "6"
        }
    };

var slider = new Slider($('aside'));
var route = function () {
    if (window.location.hash) {
        var compare = new Compare($('main'), [jayson[window.location.hash.substr(1)]]);

        if (!$('.slider').length) {
            slider.render();
        }
        slider.select(window.location.hash.substr(1));
    }
};

route();
window.onhashchange = route;
