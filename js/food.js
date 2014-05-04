var Compare = require('./compare'),
    $ = require('jquery');

var compare = new Compare($('main'), [{name: "Pork", icon: "http://bestclipartblog.com/clipart-pics/pig-clip-art-2.jpg", price: 20, protein: 10, graphSRC: "http://www.mathgoodies.com/lessons/graphs/images/line_example5.jpg", carbon: "5"}, {name: "Chickpea", icon: "http://www.entertainmentearth.com/images/AUTOIMAGES/TN4451lg.jpg", price: 10, protein: 20, graphSRC: "http://www.mathgoodies.com/lessons/graphs/images/line_example5.jpg", carbon: "6"}]);

console.log('food!');
