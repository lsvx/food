var Compare = require('./compare'),
    Slider = require('./slider.js'),
    $ = require('jquery'),
    proteins = {
        beef: {
            name: "beef",
            bg: "images/beef.jpg",
            icon: "images/beef.png",
            price: 20,
            protein: 10,
            graphSRC: "http://www.mathgoodies.com/lessons/graphs/images/line_example5.jpg",
            carbon: "5",
            rating: 0.21
        },
        pork: {
            name: "pork",
            bg: "images/pork.jpg",
            icon: "images/pork.png",
            price: 20,
            protein: 10,
            graphSRC: "http://www.mathgoodies.com/lessons/graphs/images/line_example5.jpg",
            carbon: "5",
            rating: 0.18
        },
        chickpea: {
            name: "chickpea",
            bg: "images/chickpea.jpg",
            icon: "images/chickpea.png",
            price: 10,
            protein: 20,
            graphSRC: "http://www.mathgoodies.com/lessons/graphs/images/line_example5.jpg",
            carbon: "6",
            rating: 0.85
        },
        cricket: {
            name: "cricket",
            bg: "images/cricket.jpg",
            icon: "images/cricket.png",
            rating: 0.51
        },
        soybean: {
            name: "soybean",
            bg: "images/soybean.jpg",
            icon: "images/soybean.png",
            rating: 0.74
        },
        salmon: {
            name: "salmon",
            bg: "images/salmon.jpg",
            icon: "images/salmon.png",
            rating: 0.41
        },
        chicken: {
            name: "chicken",
            bg: "images/chicken.jpg",
            icon: "images/chicken.png",
            rating: 0.46
        },
        tuna: {
            name: "tuna",
            bg: "images/tuna.jpg",
            icon: "images/tuna.png",
            rating: 0.62
        }
    };

var slider = new Slider($('aside'), proteins);
var route = function () {
    if (window.location.hash) {
        var compare = new Compare($('main'), [proteins[window.location.hash.substr(1)]]);

        if (!$('.slider').length) {
            slider.render();
        }
        slider.select(window.location.hash.substr(1));
    }
};

route();
window.onhashchange = route;
